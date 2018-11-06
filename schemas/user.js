var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Der Benutzername wird benötigt."],
    minlength: [2, "Der Benutzername darf nicht weniger als 2 Charaktere lang sein."],
    maxlength: [16, "Der Benutzername darf nicht mehr als 16 Charaktere lang sein."]
  },
  password: {
    type: String,
    required: [true, "Das Passwort wird benötigt."],
    minlength: [4, "Das Passwort darf nicht weniger als vier Charaktere lang sein."],
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

userSchema.methods.encryptPassword = function(){
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
}

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userSchema);
