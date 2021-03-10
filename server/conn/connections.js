const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://skmcomtech:skm115@cluster0.bildd.mongodb.net/BookShop?retryWrites=true&w=majority",{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("DataBase has been successfully created...");
}).catch((err)=>{
    console.log(err);
})