/**
 * 配置文件
 */
const path = require('path');
const config = {
    viewDir: path.join(__dirname, "..", "views"), // 把视图层加载引来
    //配置静态文件路径
    staticDir: path.join(__dirname, '..', 'assets'),
};

//生产环境和开发环境使用不同端口
if (process.env.NODE_ENV === 'development') {
    config.port = 3000;
} else if (process.env.NODE_ENV === 'PRODUCTION') {
    config.port = 80;
}

module.exports = config;
