const mongoose =require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const docStr = new mongoose.Schema({
    Name:String,
    Email:String,
    Phone:String,
    Password:String,
    tokens:[
        {
            token:{
                type:String
        }
    }
    ]
})

docStr.methods.generateAuth = async function(){
    try{
            const token = jwt.sign({_id : this._id.toString()},process.env.SECRET_KEY);
            this.tokens=this.tokens.concat({token:token});
          
         
   
        }catch(err){
        console.log(err);
    }
}




docStr.pre('save',async function(next){
    if(this.isModified('Password')){
       this.Password= await bcrypt.hash(this.Password,10);
       next;
    }
})

const modules = new mongoose.model('bookstore0',docStr);

module.exports=modules;