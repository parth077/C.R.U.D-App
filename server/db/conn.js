const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/MERN',{useNewUrlParser:true, useUnifiedTopology:true }).then(
    ()=>{
        console.log("DB connected");
    }    
).catch((error)=>{
    console.log(error.message);
})
