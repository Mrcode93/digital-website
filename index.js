const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8060;
const URL = process.env.MONGO_URI;
const app = express();
const Blog = require("./routers/blogRouter");
const Project = require("./routers/projectRouter");
const user = require("./routers/userRouter");
const comments = require("./routers/commentRouter");
mongoose = require("mongoose");

mongoose
  .connect(URL)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(cors());

app.use("/post", Blog);
app.use("/project", Project);
app.use("/user", user);
app.use("/comment", comments);
app.use("/uploads", express.static("uploads"));
