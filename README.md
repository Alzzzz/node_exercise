# node_exercise
node JS exercise

## 学笔记  
### koa-router:  
1、跳转路由，可以通过/:category/:id来获取url中的category和id来重新定位路由。  
</br>
2、路由嵌套
``` js
Router inner = new Router();
inner.get('/id');
Router outer = new Router();
outer.use('/user', inner.routers(), detail.allowedMethods());
```
此时每个inner的路由前面都会嵌套进outer中，例如`/user/id`。