require("dotenv").config();

// Import required modules and initialize variables
const express = require("express");
const app = express();

const ModelClass = require("./model.js");
const Model = new ModelClass();

// Retrieving data from the database
app.get("/", async (req, res) => {
    const stores = await Model.getAllStores();
    res.json(stores);
});

// Define a function to start the server
const startServer = async () => {
    await Model.connectDatabase();
    await Model.setupDatabase();
    app.listen(3000, () => {
        console.log("Example app listening on port 3000!");
    });
};

// Call the function to start the server
startServer();
