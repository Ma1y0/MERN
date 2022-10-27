const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI)
        console.log(`MongoDB connected to ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = dbConnect