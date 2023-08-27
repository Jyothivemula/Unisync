const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller");
const auth=require("../middleware/auth");

router.post('/register', controller.user_register);
router.post('/login', controller.user_login);



module.exports = router;
