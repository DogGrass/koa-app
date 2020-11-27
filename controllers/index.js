const router = require('koa-simple-router');
const IndexController = require('./indexControllers');
const indexController = new IndexController();

module.exports = app => {
    app.use(
        router(_ => {
            _.get('/', indexController.actionIndex);
            _.get('/index.html', indexController.actionIndex);
        })
    );
};
