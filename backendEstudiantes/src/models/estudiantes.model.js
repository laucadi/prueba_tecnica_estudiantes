const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estudiantesSchema = new Schema({
  nombres: { type: String, required: [true, "Nombre Obligatorio"] },
  apellidos: String,
  grado: String,
  grupo: Number,
  correo: String,
  activo: { type: Boolean, default: true },
  ubicacionGeografica: String,
});
module.exports = mongoose.model("estudiantes", estudiantesSchema);
