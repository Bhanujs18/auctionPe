const mongoose = require('mongoose');

const db = async() =>{
    mongoose.connect("mongodb+srv://bhanupratap352000:Bhanu12225@cluster0.zeskgan.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;")
    .then(()=>{
        console.log("Db is connected");
    })
    .catch(()=>{
        console.log("Db is not connected");
    })
    
}

module.exports = db;