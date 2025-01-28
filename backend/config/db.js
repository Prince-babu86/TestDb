const mongoose = require("mongoose")
require("dotenv").config()

const connectDb = async () => {
    let MONGODB_URI = process.env.MONGODB_URI
   
    try {
      await  mongoose.connect(`${MONGODB_URI}/TestDB`)
        console.log("mongodb is connected")
       
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDb