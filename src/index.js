const mongoose = require("mongoose");

const DbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB connection error:", error.message);
    }

};

module.exports = DbConnection;