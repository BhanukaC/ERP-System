const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/auth");

const { loginController, passwordChangeController } = require("../controllers/loginController");

router.post("/login", loginController);
router.post("/changePassword", [validateToken], passwordChangeController);

module.exports = router;