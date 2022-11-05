const estudiantesCtrl = {};
const estudiantesModel = require("../models/estudiantes.model");

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
  } = req.body;
  const nuevoEstudiante = new estudiantesModel({
    nombres,
    apellidos,
    grado,
    grupo,
    correo,
    activo,
    ubicacionGeografica,
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

//actualizar estudiantes:
estudiantesCtrl.actualizarUsuario = async (req, res) => {
  const id = req.params.id;
  await usuariosModels.findByIdAndUpdate({ _id: id }, req.body);
  const respuesta = await estudiantesModel.findById({ _id: id });
  res.json({
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
