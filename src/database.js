const mongoose=require('mongoose');

const {MONGODB_HOST, MONGODB_DATABASE}=process.env;
const MONGODB_URI=`mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
    .then(db=>{console.log('Base de datos conectada')})
    .catch(error=>{console.log(error)});