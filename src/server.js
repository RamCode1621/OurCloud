const { response } = require('express');
const express=require('express');
const morgan=require('morgan');


//Inicialisaciones
const app=express();

//configuraciones
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended:false
}))

//Variable globales
app.use(require('./routes/index.routes'));
app.use(require('./routes/register.routes'));


//Rutas


//Archivos estaticos


module.exports=app;