const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: [true, "please tell us your name"] },
  lastName: { type: String, required: [true, "please tell us your last name"] },
  grade: { type: String, required: [true, "please tell us your grade"] },
  group: { type: Number, required: [true, "please tell us your grade"] },
  email: {
    type: String,
    required: [true, "please tell us your grade"],
    unique: true,
    validate: [validator.isEmail, "please proveide a valid e-mail"],
  },
  status: { type: Boolean, default: true },
  geolocation: String,
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
