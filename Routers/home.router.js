const express=require('express');
const router=express.Router();
const Products=require('../models/product.model');
router.get('/', async (rq,rs)=>{
    var products=await Products.find();
    rs.render('home',{products:products});
});
module.exports=router;

