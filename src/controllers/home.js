module.exports={
    index: async (ctx,next)=>{
        ctx.response.body = `<h1>Index Page</h1>`;
    },
    home: async (ctx,next)=>{
        ctx.response.body = `<h1>Home page</h1>`;
    },
    homeParams: async (ctx,next)=>{
        console.log(ctx.params);
        ctx.response.body = `<h1>Home Page /:user/:id</h1>`
    },
    user: async (ctx,next)=>{
        await ctx.render('home/login',{
            btnName:'submit'
        })
    }
};