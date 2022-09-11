const mongoose = require("mongoose");

const PointSchema = mongoose.Schema({
  id: String,
  ratio: Number,
});

module.exports = mongoose.model("Points", PointSchema);
