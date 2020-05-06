const HomeService = require("../services/home")

module.exports={
    index: async (ctx,next)=>{
        await ctx.render("home/index", {title:"zhao-mi 欢迎你"})
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
    },
    login: async (ctx, next)=>{
        let params = ctx.request.body;
        let name = params.name;
        let password = params.password;
        let res = await HomeService.login(name, password);
      
        if(res.status == "-1"){
            await ctx.render("home/login", res.data);
        } else{
            ctx.state.title = "个人中心";
            await ctx.render("home/success", res.data);
        }
    }
};