const { response } = require('express');
const express=require('express');
const morgan=require('morgan');
const bodyparser=require('body-parser');


//Inicialisaciones
const app=express();

//configuraciones
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));//Es para ver los log http
app.use(bodyparser.urlencoded({extended:false}));//Permite capturar JSON
app.use(bodyparser.json());//Formatea el JSON obtenido

//Variable globales

//Rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/user.routes'))

//Archivos estaticos


module.exports=app;