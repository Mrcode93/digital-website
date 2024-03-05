// commentRouter.js
const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

const commentsController = require("../controllers/commentsController");

router.get("/", commentsController.getComments);

// Update your comment route in commentRouter.js or a similar file
router.post("/:blogId", async (req, res) => {
  try {
    const { comment, user } = req.body.comment;
    const blogId = req.params.blogId;

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Push the entire comment object into the comments array
    blog.comments.push({
      comment: comment,
      user: user,
    });

    await blog.save();

    res.status(201).json({ message: "Comment added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
