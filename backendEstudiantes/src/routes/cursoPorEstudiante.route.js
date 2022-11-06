const { Router } = require("express");
const router = Router();
const cursoPorEstudianteCtrl = require("../controller/cursoPorEstudiante.controller");

router.post(
  "/crearCursoPorEstudiante",
  cursoPorEstudianteCtrl.crearCursoPorEstudiante
);
router.get(
  "/listarCursoEstudiante",
  cursoPorEstudianteCtrl.listarcursPorEstudiante
);
router.get("/listarPorEstudiante/:id", cursoPorEstudianteCtrl.listardetalle);
router.delete(
  "/eliminarCursoEstudiante/:id",
  cursoPorEstudianteCtrl.eliminarcursoPorEstudiante
);

module.exports = router;
