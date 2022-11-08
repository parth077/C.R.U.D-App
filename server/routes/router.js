const express = require('express');
// const app = express();
const users = require('../models/userSchema');
const bodyParser = require('body-parser');
const { findByIdAndUpdate } = require('../models/userSchema');
const router = express.Router();


// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(express.json());

var jsonParser = bodyParser.json()


// router.get('/',(req,res)=>{
//     console.log('Connect');
// })



// add data
router.post("/register",jsonParser, (req,res)=>{

    const {name,email,age,mobile,work,address,about} = req.body;
    if(!name || ! email || !age || !mobile || !work || !address || !about){
        res.status(404).json("Please fill all details");
    }
        const addUser = new users({
            name,email,age,mobile,work,address,about
        });
        
        try{
            addUser.save();
            res.status(201).json(addUser);
        }catch(error){
            res.status(404).json(error)
        }
        
        console.log(addUser);

    // try{
    //     const preuser  =  users.findOne({email:email})
    //     console.log(preuser)

    //     if(preuser){
    //         res.status(404).send("User already present")
    //     }
    // }
});


// get all data 
router.get('/getdata',async(req,res)=>{
    try{
        const userdata = await users.find();
        res.status(201).json(userdata)
        // console.log(userdata);
    }catch(error){
        res.status(404).json(error)
    }
 
})

// get individual data
router.get('/getuser/:id',async(req,res)=>{
   try {
    console.log(req.params)
    const {id} = req.params;
     const individualUser = await users.findById({_id:id});
     console.log(individualUser)
     res.status(201).json(individualUser)
   } catch (error) {
        res.status(404).json(error)
   }
})


// update user 
router.put("/updateuser/:id",jsonParser,async(req,res)=>{
    try {
        // const {id} = req.params;
        let p = await users.findById(req.params.id);
        p = await users.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            useFindAndModify:false,
            runValidators:true
        })
        console.log(p)
        res.status(201).json(p)
    } catch (error) {
        res.status(404).json(error)
    }
})  


// delete user 
router.delete('/deleteuser/:id',async(req,res)=>{
    try {
        let deleteuser = await users.findById(req.params.id);
        deleteuser = await users.findByIdAndDelete(req.params.id)
        console.log(deleteuser);
        res.status(201).json(deleteuser)
    } catch (error) {
        res.status(404).json(error)
    }

})

module.exports = router;