// blogRouter.js
const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogContrller");

router.post("/", blogController.createBlog);
// get all blogs
router.get("/blogs", blogController.getAllBlogs);

module.exports = router;
