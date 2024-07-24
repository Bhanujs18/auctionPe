const express = require('express')
const app = express();
const authRoutes = require('./Routes/user')
const cors = require('cors');
const db = require('./db/db')
app.use(cors());
app.use(express.json())

db();

app.get("/" , (req , res)=>{
    res.status(200).json({message: "yes i m alive"})
})

app.use("/api/v1/user" , authRoutes)

app.listen(3000 , ()=>{
    console.log("server is running")
})