const Projects = require("../models/projects");
const path = require("path");
const multer = require("multer");

// Set up storage using Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure this uploads directory exists
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage }).single("image");

// The Projects model is already defined in your schema file

// Create the endpoint to handle the file upload and save the project
exports.createProject = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return res.status(500).json({ error: err.message });
    } else if (err) {
      // An unknown error occurred when uploading.
      return res.status(500).json({ error: err.message });
    }

    // If req.file is undefined, it means no file was uploaded
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const { title, description, link, demo } = req.body;
    const image = req.file.path; // This contains the path to the uploaded image

    const newProject = new Projects({
      title,
      image,
      description,
      link,
      demo,
    });

    newProject
      .save()
      .then(() =>
        res.status(201).json({ message: "New project created!", newProject })
      )
      .catch((err) => res.status(500).json({ error: err }));
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
