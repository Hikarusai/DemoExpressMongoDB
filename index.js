const http=require('http');
const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true});

const homeRouter=require('./Routers/home.router');
const registerRouter=require('./Routers/register.router');
const loginRouter=require('./Routers/login.router');

const app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views','./Views');
app.set('view engine','ejs');

app.use(express.static("Public"));

app.use('/',homeRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter);




http.createServer(app).listen(8000,()=>console.log("Server running at http://localhost:8000"));

module.exports=app;
