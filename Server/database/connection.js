const mongoose = require("mongoose");


const connectDB = async()=>{
    try {
        const url = "mongodb://127.0.0.1:27017/user"
        const con =  mongoose.connect(url,{
            useNewUrlParser: true,
        })
        
        console.log("connected successfully")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;