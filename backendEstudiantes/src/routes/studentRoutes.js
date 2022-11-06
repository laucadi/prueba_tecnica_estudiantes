const express = require("express");
const router = express.Router();
const stundentCtrl = require("../controller/studentController");

router
  .route("/")
  .get(stundentCtrl.getAllStudents)
  .post(stundentCtrl.createStudent);
router
  .route("/:id")
  .get(stundentCtrl.getStudentById)
  .patch(stundentCtrl.updateStudent)
  .delete(stundentCtrl.deleteStudent);

module.exports = router;
