const Sequelize = require('sequelize');
const sequelize = new Sequelize('custom', 'root', 'sz123456', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.log('Connected')
  }).catch(err=>{
    console.error('Connect failed')
  });

const Customer = sequelize.define('customer', {
    id: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sex: {
        type: Sequelize.ENUM(['男', '女']),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING
    },
    fullAddress: {
        type: Sequelize.STRING,
        get() {
            return `${this.getDateValue('country')}${this.getDateValue('city')}${this.getDateValue('address')}`
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    }
});
// Customer.sync().then(()=>{
//     console.log('sync success')
//   }).catch(err=>{
//     console.error('sync failed')
//   });
// sequelize.sync().then(()=>{
//     console.log('sync success')
//   }).catch(err=>{
//     console.error('sync failed')
//   });
module.exports={Customer}