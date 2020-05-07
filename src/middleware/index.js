const parserBody = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const path = require('path');
const staticFiles = require('koa-static');
const miSend = require('./mi-send/index');

module.exports = (app)=>{
    app.use(staticFiles(path.resolve(__dirname, "../public"), {
        maxage: 30*24*60*60*1000
     }));
     
     app.use(parserBody());
     app.use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, '../views'),
        nunjucksConfig: {
           trimBlocks: true
        }
     }));

    //  app.use(miSend());
}
