const mongoose = require("mongoose");

const DbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); // remove old options
        console.log("DB Connected");
    } catch (error) {
        console.error("DB connection error:", error.message);
        throw error;
    }
};

module.exports = DbConnection;