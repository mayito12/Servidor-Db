const {Model, DataTypes} = require('sequelize')

const sequelize = require('../database/db.js')

class Customer extends Model{}

Customer.init({
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING}
}, {
    sequelize, modelName: 'customers', freezeTableName: true
})

module.exports = Customer;
