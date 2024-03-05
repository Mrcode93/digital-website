// project controller

// const Projects = require("../models/projects");

// exports.createProject = async (req, res) => {
//   const project = new Projects(req.body);

//   try {
//     await project.save();
//     res.json(project);
//   } catch (err) {
//     res.json({ message: err });
//   }
// };

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
  limits: { fileSize: 1000000 }, // 1MB limit
}).single("image"); // 'image' should match the name attribute in your form input

exports.createProject = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error uploading image", error: err });
    }

    const { title, description, link, demo } = req.body;

    const project = new Projects({
      title: title,
      description: description,
      link: link,
      demo: demo,
      image: req.file ? req.file.filename : null,
    });

    try {
      await project.save();
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json({ message: "Error saving project", error: err });
    }
  });
};

// get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching projects", error: err });
  }
};
