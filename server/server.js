const express = require('express')
const app = express();
const authRoutes = require('./Routes/user')
const cors = require('cors');
const db = require('./db/db')
const dotenv = require('dotenv')
app.use(cors());
app.use(express.json())
db();

dotenv.config();

let port = process.env.PORT;

app.get("/" , (req , res)=>{
    res.status(200).json({message: "yes i m alive"})
})

app.use("/api/v1/user" , authRoutes)

app.listen(port , ()=>{
    console.log("server is running")
})