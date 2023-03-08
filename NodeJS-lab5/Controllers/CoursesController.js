const validate = require("../utils/CoursesValidation");
let CourseModel = require("../Models/CoursesModel");
// var Courses = [];
// var id=0;

var GetAllCourses = (req, res) => {
  var AllCourses = CourseModel.GetAllCourses();
  res.json(AllCourses); //[]
};
var GetCourseByID = (req, res) => {
  var id = req.params.id;
  var foundCourse = Courses.find((s) => {
    return s.id == id;
  });
  res.json(foundCourse);
};
var AddNewCourse = (req, res) => {
  var newCourse = req.body;
  var valid = validate(newCourse);
  if (valid) {
    // newCourse.id = ++id;
    // Courses.push(newCourse);
    // res.send("Created Successfully");
    var newCourseModel = new CourseModel(newCourse.name);
    newCourseModel.saveCourse();
    res.status(201).json(newCourseModel);
  } else {
    res.status(400).send("Check ur Data Type");
  }
};
var DeleteCourseByID = (req, res) => {
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
};
var UpdateCourseByID = (req, res) => {
  var ID = req.params.id;
  var updatedCourse = req.body;
  var index;
  Courses.find((s, i) => {
    if (s.id == ID) {
      index = i;
      s.name = updatedCourse.name;
    }
  });

  res.json(Courses[index] || "Not Found");
};
module.exports = {
  GetAllCourses,
  GetCourseByID,
  AddNewCourse,
  DeleteCourseByID,
  UpdateCourseByID,
};
