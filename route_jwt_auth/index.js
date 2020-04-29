const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const { sign } = require('jsonwebtoken');
const secret = 'demo';
const jwt = require('koa-jwt')({secret});
const router = new Router();
const detail = new Router();
const admin = require('./admin.js');
const bodyParser = require('koa-bodyparser');

router.prefix('/api');

router
    .post('/login', async (ctx, next)=>{
        const user = ctx.request.body;
        console.log(user);
        if (user && user.userName){
            let {userName} = user;
            const token = sign({userName}, secret, {expiresIn: '1h'});
            ctx.body = {
                message : `Get Token Success`,
                code : 1,
                token
            };
        } else {
            ctx.body = {
                message: 'Param Error',
                code: -1
            }
        }
    })
    .get('/userInfo', jwt, async (ctx, next)=>{
        ctx.body = {
            userName: ctx.state.user.userName
        }
    })
    .get('/adminInfo', jwt, admin, async ctx=>{
        ctx.body = {
            userName: ctx.state.user.userName
        }
    });

detail.get('/info', async ctx =>{
    ctx.body = {
        userName: ctx.state.user.userName
    }
});

router.use('/user', jwt, detail.routes(), detail.allowedMethods());


app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(2000, ()=>{
    console.log('Listening 2000...')
});



