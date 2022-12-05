const express = require("express");
const router = express.Router()
const CustomerService = require("../controllers/customer.controller");

router.post("/create",CustomerService.CreateCustomer);
router.get("/get/:id",CustomerService.GetCustomer);
router.put("/update/:id",CustomerService.UpdateCustomer);
router.delete("/delete",CustomerService.DeleteCustomer);
router.get("/getAll", CustomerService.GetAllCustomer);


module.exports = router;