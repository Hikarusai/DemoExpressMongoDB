const express=require('express');
const router=express.Router();

router.get('/', (rq,rs)=>{
    
    rs.render('login');
});
module.exports=router;
