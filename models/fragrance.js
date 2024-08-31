const mongoose = require("mongoose");

const fragSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please name your fragrance."],
  },
  designer: {
    type: String,
    required: true,
  },
});
