
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("momgoDB connected");
    } catch (error) {
        console.error("mongoDB Connection failed:", error.message);
        process.exit(1);
    }
};


module.exports = connectDB;

