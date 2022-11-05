const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cursoPorEstudianteSchema = new Schema({
  idestudiante: { type: Schema.Types.ObjectId, ref: "estudiante" },
  idcurso: { type: Schema.Types.ObjectId, ref: "curso" },
});

module.exports = mongoose.model("cursoPorEstudiante", cursoPorEstudianteSchema);
