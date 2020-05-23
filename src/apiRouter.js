const Router = require('koa-router');
const router = new Router();
const HomeController = require('./controllers/home');
const ServicesController = require('./services/home')
const bodyParser = require('koa-bodyparser')
const {getAllCustomers, getCustomerById, getCustomerByName, createCustomer} = require('./db')
const jsonMIME = 'application/json'

function apiRouter(app) {
    router.get('/customer', async (context) => {
        const customers = await getAllCustomers()
        context.type = jsonMIME
        context.body = {
          status: 0,
          data: customers
        }
      })
      
      router.get('/customer/:id', async context => {
        const customer = await getCustomerById(context.params.id)
        context.type = jsonMIME
        context.body = {
          status: 0,
          data: customer
        }
      })
      
      router.get('/customer/name/:name', async context => {
        const customer = await getCustomerByName(context.params.name)
        context.type = jsonMIME
        context.body = {
          status: 0,
          data: customer
        }
      })
      
      router.post('/customer', async context => {
        const customer = context.body
        await createCustomer(customer)
        context.type = jsonMIME
        context.body = {
          status: 0
        }
      })
      
    //   router.put('/customer/:id', async context => {
    //     const id = context.params.id
    //     const customer = context.body
    //     await updateCustomer(id, customer)
    //     context.type = jsonMIME
    //     context.body = {
    //       status: 0
    //     }
    //   })
      
    //   router.delete('/customer/:id', async context => {
    //     await deleteCustomer(context.params.id)
    //     context.type = jsonMIME
    //     context.body = {
    //       status: 0
    //     }
    //   })
      

    app.use(router.routes(), router.allowedMethods());
}

module.exports = apiRouter;