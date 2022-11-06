const mongoose = require("mongoose");
//URL = "mongodb://localhost/estudiantes";
URL =
  "mongodb+srv://lauCaicedo:1234@cluster0.k3s6gj0.mongodb.net/studentBD?retryWrites=true&w=majority";
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Base de datos conectada:", db.connection.name))
  .catch((error) => console.log(error));

module.exports = mongoose;
