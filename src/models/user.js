const {Schema, model}=require('mongoose');
const bcrypt=require('bcryptjs');

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

userSchema.methods.encryptPassoword=async(password)=>{
    const salt=await bycrypt.genSalt(10);
    const passwordEncrypt=await bcrypt.hash(password,salt);
    return passwordEncrypt;
}

userSchema.methods,comparePassword=async function(password){
    await bcrypt.compare(password, this.password);
}

module.exports=model('User',userSchema,'Users');