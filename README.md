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

### koa-status  
静态管理库，在初始化时制定静态库位置，一般存储css、图片等数据。

### 逻辑分层  
通过router路由进行数据分发，可抽象中间层用于逻辑调用，如登录模块，post请求到user/login先指向的是controller中的login再由其进行service的调用，获取数据进行跳转处理，如果成功跳转页面，失败直接直接修改提示。  
但其中各处理都未进行跳转，只是进行了当前页面的重新render