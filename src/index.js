require('dotenv').config();
const app=require('./server');
require('./database')

app.listen(process.env.PORT,function(req,res){
    console.log(`Servidor activo en el puerto ${app.get('port')}`);
}) 