import express from "express"
import bcrypt from "bcrypt"
import mongoose from "mongoose"
import callDB from "./config/db.js"
import userModel from "./models/User.js"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors());
app.use(express.json())

callDB();
app.post('/register', async (req, res) => {
try{
  const email= req.body.email
  const password=req.body.pwd
  if(!email || !password){
    res.status(400).send("Empty credentials")
  }
  const checkEmail=await userModel.findOne({email})
  if(checkEmail){
    res.status(409).send("Email already exists")
  } 
  const hashedPass= await bcrypt.hash(password, 2)
  const obj= new userModel({email:email, password: hashedPass})
  await obj.save();
  return res.status(201).send("User registered successfully")
}
catch(e){
    console.log(e);
    res.status(500).send("Internal Server Error")
}
})

app.get('/login', async (req, res)=>{

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})