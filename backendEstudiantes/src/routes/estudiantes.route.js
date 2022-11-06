const { Router } = require("express");
const router = Router();
const estudianteCtrl = require("../controller/estudiantes.controller");

router.post("/registroEstudiante", estudianteCtrl.crear);
router.get("/listarEstudiante", estudianteCtrl.listarEstudiante);
router.get("/listarestudiantes/:id", estudianteCtrl.listarporcurso);
router.patch("/estudiantes/:id", estudianteCtrl.actualizarEstudiante);

module.exports = router;
