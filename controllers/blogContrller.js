// controllers/blogController.js
const Blog = require("../models/blog");

exports.createBlog = async (req, res) => {
  const blog = new Blog(req.body);

  try {
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.json({ message: err });
  }
};

// get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.json({ message: err });
  }
};
