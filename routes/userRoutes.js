const express = require("express");
const router = express.Router();
const { login, Register } = require("../controllers/userController");

router.post("/login", login);

router.post("/register", Register);

module.exports = router;