var express = require('express');
var router = express.Router();

//DB controller
const { findAll, editContact,postContact, deleteContact} = require("../controller/database/biodata");

//routes
router.get("/findAll", findAll);
router.patch("/contact/:id", editContact);
router.post("/contact/", postContact);
router.delete("/contact/:id", deleteContact);

router.get('/', function(req, res, next) {
  res.send('request entered is  incorrect ');
});
module.exports = router;
