const express = require("express");
let router = express.Router();
const C_validate = require("../utils/CoursesValidation");

var Courses = [];
var C_id = 0;
//GET ALL STUDENTS
router.get("/", (req, res) => {
  res.json(Courses);
});
//GET STUDENT BY ID
router.get("/:id", (req, res) => {
  var id = req.params.id;
  var foundCourse = Courses.find((s) => {
    return s.id == id;
  });
  res.json(foundCourse);
});
//ADD New STUDENT [body]
router.post("/create", (req, res) => {
  var newStudent = req.body;
  newStudent.id = ++C_id;
  Courses.push(newStudent);
  // res.send("Created Successfully");
  res.status(201).json(newStudent);
});
//Delete STUDENT By ID
router.delete("/:id", (req, res) => {
  var ID = req.params.id;
  var index;
  Courses.find((s, i) => {
    if (s.id == ID) {
      index = i;
    }
  });
  console.log(index);
  Courses.splice(index, 1);
  res.send("Deleted Successfully");
});
//Update Student By ID [/students/5] [body]
router.put("/:id", (req, res) => {
  var ID = req.params.id;
  var updatedStudent = req.body;
  var index;
  Courses.find((s, i) => {
    if (s.id == ID) {
      index = i;
      s.name = updatedStudent.name;
      s.duration = updatedStudent.duration;
      // console.log(s);
    }
  });

  // console.log(index)
  res.json(Courses[index] || "Not Found");
});

module.exports = router;
