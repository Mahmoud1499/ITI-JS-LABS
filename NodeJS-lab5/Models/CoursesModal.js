var CoursesArr = [];
var id = 0;
class Courses {
  constructor(name, age, dept) {
    this.id = ++id; //
    this.name = name;
  }
  //Get All Courses
  static GetAllCourses() {
    return CoursesArr;
  }
  //Add New Course
  saveCourse() {
    CoursesArr.push(this);
    return this;
  }
}

module.exports = Courses;
