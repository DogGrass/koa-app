const APIError = require('../rest').APIError; //错误请求处理
const query = require('../data/getContent')
//请求接口配置...
module.exports = {
    //userlist全部
    'GET /api/list': async (ctx, next) => {
        let sql = 'SELECT * FROM blog_local.t_user LIMIT 0,1000';
        ctx.rest({
            site: await query(sql),
        });
    },
};
