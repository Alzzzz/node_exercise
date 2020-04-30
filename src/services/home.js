module.exports={
    login: async (ctx,next)=>{
        let user = ctx.request.body;
        if (user.userName === 'sz' && user.passWord === '123456'){
            ctx.response.body = `<h1>Login Success! Hello ${user.userName}</h1>`
        } else {
            ctx.response.body = `<h1>Login Failed!</h1>`
        }
    }
};