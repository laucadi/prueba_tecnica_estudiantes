const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: { type: String, required: [true, "this field is required"] },
  credits: Number,
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
