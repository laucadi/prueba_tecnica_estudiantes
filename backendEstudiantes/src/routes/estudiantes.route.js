const { Router } = require("express");
const router = Router();
const estudianteCtrl = require("../controller/estudiantes.controller");

router.post("/registroEstudiante", estudianteCtrl.crear);
router.get("/listarEstudiante", estudianteCtrl.listarEstudiante);

module.exports = router;
