const express = require("express");
const router = express.Router();
const courseCtrl = require("../controller/courseController");

router.route("/").get(courseCtrl.getAllCourses).post(courseCtrl.createCourse);
router
  .route("/:id")
  .get(courseCtrl.getCourseById)
  .patch(courseCtrl.updateCourse)
  .delete(courseCtrl.deleteCourse);

module.exports = router;
