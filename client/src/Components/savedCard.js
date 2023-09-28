// savedCard.js
const mongoose = require("mongoose");

const savedCardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User collection
    required: true,
  },
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Card", // Reference to the Card collection
    required: true,
  },
  savedAt: {
    type: Date,
    default: Date.now,
  },
});

const SavedCard = mongoose.model("SavedCard", savedCardSchema);

module.exports = SavedCard;
