const cursosPorEstudianteCtrl = {};
const cursosPorEstudianteModel = require("../models/cursoPorEstudiantes.model");

//Añadir curso a estudiante:

cursosPorEstudianteCtrl.crearCursoPorEstudiante = async (req, res) => {
  const { idestudiante, idcurso } = req.body;
  const nuevo = new cursosPorEstudianteModel({
    idestudiante,
    idcurso,
  });
  const idestudiantes = await cursosPorEstudianteModel.findOne({
    idestudiante: idestudiante,
  });
  if (idestudiantes) {
    res.json({
      mensaje: "el usuario ya esta inscrito a este curso",
    });
  } else {
    res.json({
      mensaje: "curso creado",
      nuevo,
    });
  }
};
//listar por id
cursosPorEstudianteCtrl.listardetalle = async (req, res) => {
  const id = req.params.id;
  const respuesta = await cursosPorEstudianteModel.find({ estudiante: id });
  res.json(respuesta);
};

//listar los cursos añadidos a  estudiante:
cursosPorEstudianteCtrl.listarcursPorEstudiante = async (req, res) => {
  const respuesta = await cursosPorEstudianteModel.find();
  res.json(respuesta);
};
//eliminar curso a  estudiante:

cursosPorEstudianteCtrl.eliminarcursoPorEstudiante = async (req, res) => {
  const id = req.params.id;
  await cursosPorEstudianteModel.findByIdAndRemove({ _id: id });
  res.json({
    mensaje: "Curso eliminado al estudiante",
  });
};

module.exports = cursosPorEstudianteCtrl;
