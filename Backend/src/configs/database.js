const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_URI, () => {
      console.log("Base de datos conectada");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
