const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    maxlength: [400, "email cannot be more than 40 characters"],
  },
  name: {
    type: String,
    // required: true,
    maxlength: [200, "name cannot be more than 200 characters"],
  },
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
