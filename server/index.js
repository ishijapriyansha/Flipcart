import express from "express"
import bcrypt from "bcrypt"
import mongoose from "mongoose"
import callDB from "./config/db.js"
import userModel from "./models/User.js"
import cors from "cors"
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser"
const secretkey="ishija$3"
import authMiddleware from "./middleware/middleware.js"

const app = express()
const port = 3000

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));
app.use(cookieParser());
app.use(express.json())

callDB();

// Test route to verify server is running
app.get('/', (req, res) => {
  res.send('Backend server is running! Available routes: POST /register, GET /login');
});

app.post('/register', async (req, res) => {
try{
  const email= req.body.email
  const password=req.body.pwd
  if(!email || !password){
    return res.status(401).send("Empty credentials")
  }
  const checkEmail=await userModel.findOne({email})
  if(checkEmail){
    return res.status(409).send("Email already exists")
  } 
  const hashedPass= await bcrypt.hash(password, 2)
  const obj= new userModel({email:email, password: hashedPass})
  await obj.save();
  return res.status(201).send("User registered successfully")
}
catch(e){
    console.log(e);
    return res.status(500).send("Internal Server Error")
}
})

app.post('/login', async (req, res)=>{
  try{
    const loginEmail=req.body.email
    const loginPassword=req.body.pwd
    if(!loginEmail || !loginPassword){
      return res.status(401).send("Empty email or password")
    }
    const lookEmail=await userModel.findOne({email: loginEmail})
    if(!lookEmail){
      return res.status(401).send("Email not registered")
    }
    const hashPass=lookEmail.password;
    const comparePass=await bcrypt.compare(loginPassword, hashPass)
    if(comparePass){
      const token= jwt.sign({email:loginEmail}, secretkey,{expiresIn:'1h'})
      
      res.cookie("token", token,{httpOnly:true, secure:false, sameSite:"lax"})
      return res.status(200).send("Login Successful")
      
    }
    else return res.status(401).send("Invalid credentials")
  }
  catch(err){
    console.log(err);
    return res.status(500).send("Internal Server Error")
  }
})

app.post('/logout', async (req, res)=>{
  res.clearCookie("token", { httpOnly:true, secure:false, sameSite:"lax"})
  return res.status(200).send("User Logged out")
})

app.get('/profile', authMiddleware, async (req, res)=>{
  return res.send("Protected route")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})