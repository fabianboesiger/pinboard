var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Der Titel wird benötigt."],
    maxlength: [2, "Der Titel darf nicht weniger als 2 Charaktere lang sein."],
    maxlength: [128, "Der Titel darf nicht mehr als 128 Charaktere lang sein."]
  },
  content: {
    type: String,
    required: [true, "Der Inhalt wird benötigt."],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Article', articleSchema);
