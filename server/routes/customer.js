
const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");


router.get("/", customerController.homepage);

router.get("/add", customerController.addCustomer);

router.post("/add", customerController.postCustomer);

// View User
router.get("/view/:id", customerController.view);

// Update User
router.get("/edit/:id", customerController.edit);

router.put("/edit/:id", customerController.editPost);

// Delete User
router.delete("/edit/:id", customerController.deleteCustomer);

// Search Route

router.post("/search", customerController.searchCustomers);

// About 
router.get("/about", customerController.about)


module.exports = router;