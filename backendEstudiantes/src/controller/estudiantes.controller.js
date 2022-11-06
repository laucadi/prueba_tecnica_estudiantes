const estudiantesCtrl = {};
const estudiantesModel = require("../models/studentModel");

//crear estudiantes:

estudiantesCtrl.crear = async (req, res) => {
  const {
    nombres,
    apellidos,
    grado,
    grupo,
    correo,
    activo,
    ubicacionGeografica,
    cursos,
  } = req.body;
  const nuevoEstudiante = new estudiantesModel({
    nombres,
    apellidos,
    grado,
    grupo,
    correo,
    activo,
    ubicacionGeografica,
    cursos,
  });
  const rsta = await nuevoEstudiante.save();
  res.json({
    mensaje: "Estudiante creado",
    rsta,
  });
};

//listar estudiantes:
estudiantesCtrl.listarEstudiante = async (req, res) => {
  const respuesta = await estudiantesModel.find();
  res.json({
    mensaje: "Success",
    respuesta,
  });
};
//listar cursos de estudiantes:
estudiantesCtrl.listarporcurso = async (req, res, next) => {
  const id = req.params.id;
  const cursos = await estudiantesModel
    .findById({ _id: id })
    .populate("courses");
  if (!cursos) {
    return next("error");
  }
  res.status(200).json({
    mensaje: "success",
    cursos,
  });
};

//actualizar estudiantes:
estudiantesCtrl.actualizarEstudiante = async (req, res) => {
  const id = req.params.id;

  const respuesta = await estudiantesModel.findByIdAndUpdate(
    { _id: id },
    req.body
  );
  console.log(respuesta);
  res.status(200).json({
    mensaje: "estudiante actualizado",
    respuesta,
  });
};
//eliminar estudiantes:
estudiantesCtrl.eliminarUsuario = async (req, res) => {
  const id = req.params.id;
  await estudiantesModel.findByIdAndRemove({ _id: id });
  res.json({
    mensaje: "estudiante eliminado",
  });
};

module.exports = estudiantesCtrl;
