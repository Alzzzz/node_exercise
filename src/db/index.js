const { Customer } = require('./model/customer');
const { Op } = require('sequelize');

async function getAllCustomers(){
    return Customer.findAndCountAll({
        attributes: ['id', 'name', 'sex', 'fulladdress'],
        order:[['updatedAt','DESC']]
    })
}

async function getCustomerById(id) {
    return Customer.findById(id);
}

async function getCustomerByName(name){
    return Customer.findAll({
        where:{
            name:{
                [Op.like]:`${name}%`
            }
        }
    })
}

async function createCustomer(id, customer){
    return Customer.create(customer)
}

module.exports={
    getAllCustomers, getCustomerById, getCustomerByName, createCustomer
}