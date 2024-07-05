const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

const Card = new mongoose.model("card", cardSchema);
module.exports = Card;
