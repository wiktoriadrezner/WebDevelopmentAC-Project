// Start the app: node server/app.js
// Start the app (nodemon): nodemon server/app.js
// Website: http://127.0.0.1:3000
// Kill the server: CONTROL + C
// Database server: 172.17.0.1
// Database: http://localhost:8080

require("dotenv").config();

// Import required modules and initialize variables
const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");

const app = express();
app.set("view engine", "hbs");
app.set("views", "./client/views");

app.engine(
    "hbs",
    expressHandlebars.engine({
        defaultLayout: "main.hbs",
    })
);

app.use(express.static(path.join(__dirname + "/../client/")));

app.use(
    express.urlencoded({
        extended: false,
    })
);

const ModelClass = require("./model.js");
const Model = new ModelClass();

// Retrieving data from the database
app.get("/stores/all", async (req, res) => {
    const stores = await Model.getAllStores();
    res.json(stores);
});

// Render the start page
app.get("/", (request, response) => {
    response.render("index", {
        webTitle: "JKPGCITY",
        webStyle: "styles/index.css",
    });
});

// Render the about page
app.get("/about", (request, response) => {
    response.render("about", {
        webTitle: "About",
        webStyle: "styles/about.css",
    });
});

// Render the contact page
app.get("/contact", (request, response) => {
    response.render("contact", {
        webTitle: "Contact",
        webStyle: "styles/contact.css",
    });
});

// Render the stores page
app.get("/stores", (request, response) => {
    response.render("stores", {
        webTitle: "Stores",
        webStyle: "styles/stores.css",
    });
});

// Define a function to start the server
const startServer = async () => {
    await Model.connectDatabase();
    await Model.setupDatabase();
    app.listen(3000, () => {
        console.log("Server is starting at port 3000!");
    });
};

// Call the function to start the server
startServer();
