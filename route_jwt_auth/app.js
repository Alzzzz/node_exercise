const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

router.all('/', async (ctx, next)=>{
    console.log(`match "all" method`);
    await next();
});

router.get('/', async (ctx, next)=>{
   ctx.response.body = `<h1>index page</h1>`;
   await next();
});

router.get("/:category/:title", async (ctx, next)=>{
    console.log(ctx.params);
});

app.use(router.routes());

app.listen(3000);