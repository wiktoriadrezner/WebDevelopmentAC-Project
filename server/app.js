// Import required modules and initialize variables
const express = require("express");
const ModelClass = require("./model.js");
const storesJSON = require("./stores.json");

const app = express();
const Model = new ModelClass();

// Setting up the database
app.get("/setup", async (req, res) => {
    await Model.setup(storesJSON);
    res.json({ success: true });
});

// Retrieving data from the database
app.get("/", async (req, res) => {
    const stores = await Model.getAllStores();
    res.json(stores);
});

// Define a function to start the server
const startServer = async () => {
    await Model.init();
    app.listen(3000, () => {
        console.log("Example app listening on port 3000!");
    });
};

// Call the function to start the server
startServer();
