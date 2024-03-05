const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      //   required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    demo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Projects = mongoose.model("projects", projectSchema);

module.exports = Projects;
//
