const UserModel = require("../models/users");

// CREATE

const createUser = async (req, res) => {
  try {
    
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserByID = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.status(200).json({ user });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userUpdated = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!userUpdated) {
      return res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ message: "User updated", userUpdated });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userDeleted = await UserModel.findByIdAndDelete(req.params.id);
    if (!userDeleted) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ message: "User deleted", userDeleted });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserByID,
  updateUser,
  deleteUser,
};
