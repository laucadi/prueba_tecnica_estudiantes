const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRouter = require("./routes/studentRoutes");
const courseRouter = require("./routes/courseRoutes");

require("./database");

const port = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origen: "*" }));

app.listen(port, function () {
  console.log("La aplicación esta escuchando en el puerto " + port);
});

//routes
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/courses", courseRouter);
