const mongoose = require("mongoose");

URI = process.env.MONGO_URI;
console.log(URI);

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("msg from db.js");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

module.exports = connectdb;
