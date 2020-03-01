var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    img:   String,
    price: String
  });

   var Product=mongoose.model('Product',productSchema,'products');

   module.exports=Product;