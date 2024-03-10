const Projects = require("../models/projects");
const multer = require("multer");
const path = require("path");

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
}).single("image");

exports.createProject = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Error uploading image:", err);
      return res
        .status(500)
        .json({ message: "Error uploading image", error: err });
    }

    const { title, description, link, demo } = req.body;

    const project = new Projects({
      title,
      description,
      link,
      demo,
      image: req.file ? req.file.filename : null,
    });

    try {
      await project.save();
      res.status(201).json(project);
    } catch (err) {
      console.error("Error saving project:", err);
      res.status(500).json({ message: "Error saving project", error: err });
    }
  });
};

// get all projects

exports.getAllProjects = async (req, res) => {
  try {
    // Use populate to retrieve image data
    const projects = await Projects.find().populate(
      "image",
      "data contentType"
    );
    // send the file name of uploaded image

    if (!projects) {
      return res
        .status(404)
        .json({ message: "No projects found", error: "No projects found" });
    }

    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching projects", error: err });
  }
};
