require('dotenv').config();
const app=require('./server');
require('./database')

app.listen(process.env.PORT,()=>{
    console.log(`Servidor activo en el puerto ${app.get('port')}`);
}) 