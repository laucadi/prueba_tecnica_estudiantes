const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./database");

const port = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origen: "*" }));

app.listen(port, function () {
  console.log("La aplicación esta escuchando en el puerto " + port);
});

app.use("/estudiantes", require("./routes/estudiantes.route"));
app.use("/cursos", require("./routes/cursos.route"));
app.use("/cursosPorEstudiante", require("./routes/cursoPorEstudiante.route"));
