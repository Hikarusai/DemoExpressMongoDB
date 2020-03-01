var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

   var userSchema = new Schema({
    name: String,
    email : String,
    passwork:   String

  });

   var User=mongoose.model('User',userSchema,'users');

   module.exports=User;