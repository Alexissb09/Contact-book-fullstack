const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserByID,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserByID);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
