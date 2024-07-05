const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
});

const Blog = new mongoose.model("blog", blogSchema);
module.exports = Blog;
