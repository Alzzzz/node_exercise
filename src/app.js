const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const middleware = require('./middleware/index');

middleware(app);
router(app);

app.listen(3000, async ctx=>{
   console.log('Listening 3000...');
});