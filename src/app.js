const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const parserBody = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const path = require('path');

app.use(parserBody());
app.use(nunjucks({
   ext: 'html',
   path: path.join(__dirname, 'views'),
   nunjucksConfig: {
      trimBlocks: true
   }
}));
router(app);

app.listen(3000, async ctx=>{
   console.log('Listening 3000...');
});