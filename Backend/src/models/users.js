const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true, min: 0 },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserModel", UserSchema);
