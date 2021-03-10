require('dotenv').config();
const express= require('express');
const app=express();
const bcrypt = require('bcryptjs');
const cors=require('cors');
const port = process.env.PORT || 2002;

require('../conn/connections');
const moduleses = require('../strut/structure');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


// app.get('/',async (req,res)=>{
//     const val= await moduleses.findOne({_id:"604852e8486c4916c8977958"});
//     if(await bcrypt.compare('12345',val.Password) ){
//         res.send("Password is matched")
//     }
//     else{
//         res.send("password is not matched")
//     }
// })


app.post('/api',async (req,res)=>{

    try{
             const result = new moduleses(req.body);
             
             result.generateAuth();

             const field = await result.save();
             console.log(field);
             res.end();
    }catch(err){
        console.log(err);
    }
   
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})