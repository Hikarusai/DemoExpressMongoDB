const express=require('express');
const router=express.Router();
const User=require('../models/user.model');

router.get('/',(rq,rs)=>{
    
    rs.render('register');
});
router.post('/',async (rq,rs)=>{
    var errors=[];
	if(!rq.body.name)
	{
		errors.push('Name is required');
	}
	if(!rq.body.phone)
	{
		errors.push('Email is required');
	}
	if(errors.length)
	{
		 rs.render('register',{errors:errors,values:rq.body});
		 return;
	}
	await User.create(rq.body);
	rs.redirect('/home');
});
module.exports=router;

