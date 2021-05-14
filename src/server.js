const { response } = require('express');
const express=require('express');
const morgan=require('morgan');


//Inicialisaciones
const app=express();

//configuraciones
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'))

//Variable globales
app.get('/',(req,res)=>{
    res.json({
        Hello:'World'
    })
});

//Rutas


//Archivos estaticos


module.exports=app;