const mongoose = require("mongoose");

const DB_URI = "mongodb+srv://herreraadmi:herreraadmi@cluster0.vyiwcvy.mongodb.net/"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB