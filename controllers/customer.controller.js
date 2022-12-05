const sequelize = require("../database/db");
const Customer = require("../models/customer");

const CreateCustomer = async (req,res) => {

    const customer = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    }
    await  Customer.create(customer)
    .then(data => {
        res.send({
            "status":"successfully"
        })
    }).catch(e => {
        res.send("it can't create Customer")
    })

}

// const GetCustomer = async(req,res) => {
//     await Customer.findAll({
//         where: {
//             id: req.params.id
//         }
//     }).then(data => {
//         res.send({
//             "data": data
//         })
//     }).catch (e => {
//         console.log("error");
//     })
// }

const GetCustomer = async(req, res) => {
    task = await Customer.findAll({
        where: {
            id: req.params.id
        }
    });
    res.json(task)
}

const GetAllCustomer = async(req, res) => {
    const task = await Customer.findAll()
    res.json(task)
}

const UpdateCustomer = async (req,res) => {
    await Customer.update({name: req.body.name, email: req.body.email, address: req.body.address},{
        where: {
            id: req.params.id
        }
    }).then(d => {
        res.send({
            "data": d
        })
    }).catch(e => {
        res.send({
            "data":"null"
        })
    })
}

const DeleteCustomer = async (req,res) =>  {
    await Customer.destroy({
    where:{
        id: req.body.id
    }
    }).then(data => {
        res.send({
            "status":"true"
        })
    }).catch(e => {
    res.send({
        "status": "false"
    })
    })
}

module.exports = {
    CreateCustomer,
    GetCustomer,
    GetAllCustomer,
    UpdateCustomer,
    DeleteCustomer
}