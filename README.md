# node_exercise
node JS exercise

## 学习笔记  
### koa-router:  
1、跳转路由，可以通过/:category/:id来获取url中的category和id来重新定位路由。  
2、路由嵌套
``` js
Router inner = new Router();
inner.get('/id');
Router outer = new Router();
outer.use('/user', inner.routers(), detail.allowedMethods());
```
此时每个inner的路由前面都会嵌套进outer中，例如`/user/id`。

### jwt-auth
1、认证功能，登录有给用户访问者一个token，用token进行鉴权。  
2、jwt就是用于鉴权的中间件，与jsonwebtoken生成的token对应。