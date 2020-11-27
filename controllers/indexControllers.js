class IndexControllers {
    constructor() {}

    async actionIndex(ctx, next) {
        ctx.body = await ctx.render('index.html', {
            content: 'hello node!',
        });
    }
}

module.exports = IndexControllers;
