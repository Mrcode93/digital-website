// // models/blogModel.js
// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       // required: true,
//     },
//     image: {
//       type: String,
//     },
//     description: {
//       type: String,
//     },
//     comments: [],
//     likes: {},
//   },
//   { timestamps: true }
// );

// const Blog = mongoose.model("blog", postSchema);

// module.exports = Blog;

// models/blogModel.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    comments: [commentSchema], // Embed the comment schema array inside the post schema
    likes: {},
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", postSchema);

module.exports = Blog;
