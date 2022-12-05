const express = require("express");
const sequelize = require("./database/db");
const app = express()
const customer = require("./routes/customer.route")
require('dotenv').config();

//CORS middleware
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use("/customer", customer)

app.get("/", (req, res) => {
    res.json({
        "hello": "hola mundo"
    })
})

app.listen(process.env.PORT, () => {
    console.log("Server running" + process.env.PORT);
    sequelize.sync().then(() => {
        console.log("db running");
    })
});