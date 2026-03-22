const express = require("express");
const dotenv = require("dotenv");
const DbConnection = require("./index");
const router = require("./routes/Index");
const cors = require("cors"); //
dotenv.config();

const app = express();


DbConnection();

app.use(cors());
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
    res.status(200).send("Backend is working!");
});

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
