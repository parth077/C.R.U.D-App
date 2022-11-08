require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
require('./db/conn');
const cors = require('cors')
const users = require('./models/userSchema')
const router = require('./routes/router')


app.use(router);
app.use(cors());
app.use(express.json());



const PORT = 8080;


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})