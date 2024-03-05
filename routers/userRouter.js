// userRouter.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userConroller");

router.post("/register", userController.Register);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/login", userController.Login);
router.post("/logout", userController.logout);

module.exports = router;
