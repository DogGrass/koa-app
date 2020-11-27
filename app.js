const Koa = require('koa');
const app = new Koa();
const config = require('./config');
const serve = require('koa-static');
const render = require('koa-swig');
const co = require('co');

//注册路由
require('./controllers/index')(app);

// 加载静态文件
app.use(serve(config.staticDir));

// 配置模板引擎
app.context.render = co.wrap(
    render({
        root: config.viewDir, // 把视图层加载引来
        autoescape: true,
        cache: false, // 缓存
        ext: 'html',
        writeBody: false,
    })
);

app.listen(config.port, () => {
    console.log('server is running..');
});
