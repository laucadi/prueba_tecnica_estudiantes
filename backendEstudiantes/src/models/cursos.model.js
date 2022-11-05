const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cursosSchema = new Schema({
  nombre: String,
  creditos: Number,
});
module.exports = mongoose.model("cursos", cursosSchema);
