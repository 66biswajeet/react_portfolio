const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Admin = new mongoose.model("Admin", adminSchema);
module.exports = Admin;
