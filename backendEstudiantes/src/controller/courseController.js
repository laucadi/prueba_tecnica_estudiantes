const courseCtrl = {};
const Course = require("../models/courseModel");

//listar cursos:
courseCtrl.getAllCourses = async (req, res) => {
  const doc = await Course.find();
  res.status(200).json({
    status: "Success",
    results: doc.length,
    response: {
      data: doc,
    },
  });
};
//crear curso:
courseCtrl.createCourse = async (req, res) => {
  const doc = await Course.create(req.body);
  res.status(201).json({
    status: "success",
    response: {
      data: doc,
    },
  });
};
//listar por ID:
courseCtrl.getCourseById = async (req, res, next) => {
  const id = req.params.id;
  const data = await Course.findById({ _id: id });
  if (!data) {
    return next("error");
  }
  res.status(200).json({
    mensaje: "success",
    response: {
      data: data,
    },
  });
};

//actualizar curso:
courseCtrl.updateCourse = async (req, res) => {
  const id = req.params.id;
  const doc = await Course.findByIdAndUpdate({ _id: id }, req.body);
  res.status(200).json({
    status: "success",
    response: {
      data: doc,
    },
  });
};
//eliminar curso:
courseCtrl.deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    response: {
      data: null,
    },
  });
};

module.exports = courseCtrl;
