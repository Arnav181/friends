const mongoose = require("mongoose");

const friendshipSchema = new mongoose.Schema(
  {
    name1: { type: String, required: true },
    name2: { type: String, required: true },
    percentage: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Friendship", friendshipSchema);
