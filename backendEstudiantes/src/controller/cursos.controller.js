const cursosCtrl = {};
const cursosModel = require("../models/cursos.model");

cursosCtrl.crearCurso = async (req, res) => {
  const { nombre, creditos, idestudiante } = req.body;
  const nuevoCurso = new cursosModel({
    nombre,
    creditos,
  });
  const rsta = await nuevoCurso.save();
  res.json({
    mensaje: "curso creado",
    rsta,
  });
};

//listar cursos:
cursosCtrl.listarCursos = async (req, res) => {
  const respuesta = await cursosModel.find();
  res.json(respuesta);
};

module.exports = cursosCtrl;
