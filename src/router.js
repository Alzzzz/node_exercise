const Router = require('koa-router');
const router = new Router();
const HomeController = require('./controllers/home');
const ServicesController = require('./services/home')

function GoRouter(app) {
    router.get('/', HomeController.index);
    router.get('/home', HomeController.home);
    router.get('/home/:user/:id', HomeController.homeParams);
    router.get('/user', HomeController.user);
    router.post('/user/login', ServicesController.login);

    app.use(router.routes(), router.allowedMethods());
}

module.exports = GoRouter;