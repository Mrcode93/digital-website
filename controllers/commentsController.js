// setup comments controller
const Comment = require("../models/comments");
const Blog = require("../models/blog"); // Import the Blog model

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// exports.postComment = async (req, res) => {
//   const { comment, user, postId } = req.body;

//   try {
//     // Check if the blog post exists
//     const blog = await Blog.findById(postId);
//     if (!blog) {
//       return res.status(404).json({ message: "Blog post not found" });
//     }

//     const newComment = new Comment({
//       comment,
//       user,
//       postId,
//     });

//     // Add the new comment to the blog post's comments array
//     blog.comments.push(newComment);
//     // Save the updated blog post with the new comment
//     await blog.save();

//     res.status(201).json({ message: "Comment added successfully" });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

exports.postComment = async (req, res) => {
  const { comment, user, postId } = req.body;
  console.log(comment, user, postId);

  try {
    // Check if the blog post exists
    const blog = await Blog.findById(postId);
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    const newComment = new Comment({
      comment,
      user,
      postId,
    });

    // Add the new comment to the blog post's comments array
    blog.comments.push(newComment);
    // Save the updated blog post with the new comment
    await blog.save();

    // Send a response with additional details
    res.status(201).json({
      message: "Comment added successfully",
      blogPost: blog, // You can customize this to include only necessary details
      newComment: newComment,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
