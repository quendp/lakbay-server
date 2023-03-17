const express = require("express");
const { UsersController } = require("../controllers/users.controllers");
const router = express.Router();
const passport = require("passport");

router.post("/", UsersController.createUser);
router.get("/", UsersController.getAllUsers);
router.put("/:id", UsersController.updateUserById);
router.delete("/:id", UsersController.deleteUserById);

router.post("/register", UsersController.registerUser);
router.post("/login", UsersController.loginUser);
router.get("/:username", passport.authenticate("jwt", { session: false }), UsersController.getUserByUsername);

module.exports = router;