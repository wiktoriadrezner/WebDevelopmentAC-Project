// To start an app type in the terminal: node server/app.js
// CONTROL + C: kill the server
// Server for the Database: 172.17.0.1

require("dotenv").config();

// Import required modules and initialize variables
const express = require("express");
const path = require("path");
const app = express();

let p = path.join(__dirname + "/../client/");
console.log(p);

app.use(express.static(p));

const ModelClass = require("./model.js");
const Model = new ModelClass();

// Retrieving data from the database
app.get("/stores/all", async (req, res) => {
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
