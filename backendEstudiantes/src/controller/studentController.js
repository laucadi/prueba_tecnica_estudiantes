const stundentCtrl = {};
const Student = require("../models/studentModel");

//listar estudiantes:

stundentCtrl.getAllStudents = async (req, res) => {
  const doc = await Student.find().populate("courses").populate("courses");
  res.status(200).json({
    status: "Success",
    results: doc.length,
    response: {
      data: doc,
    },
  });
};

//crear estudiantes:

stundentCtrl.createStudent = async (req, res) => {
  const doc = await Student.create(req.body);
  res.status(201).json({
    status: "success",
    response: {
      data: doc,
    },
  });
};
//listar por ID
stundentCtrl.getStudentById = async (req, res, next) => {
  const id = req.params.id;
  const data = await Student.findById({ _id: id }).populate("courses");
  if (!data) {
    return next("error");
  }
  res.status(200).json({
    status: "success",
    response: {
      data: data,
    },
  });
};

//actualizar estudiante:
stundentCtrl.updateStudent = async (req, res) => {
  const id = req.params.id;
  const doc = await Student.findByIdAndUpdate({ _id: id }, req.body);
  res.status(200).json({
    status: "success",
    response: {
      data: doc,
    },
  });
};
//eliminar estudiantes:
stundentCtrl.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    response: {
      data: null,
    },
  });
};

module.exports = stundentCtrl;
