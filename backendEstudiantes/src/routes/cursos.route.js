const { Router } = require("express");
const router = Router();
const cursosCtrl = require("../controller/cursos.controller");

router.post("/crearCurso", cursosCtrl.crearCurso);
router.get("/listarCurso", cursosCtrl.listarCursos);

module.exports = router;
