const sqlite3 = require("sqlite3");

// Connect to database
const database = new sqlite3.Database("stores.db");

// Create a database table
database.run(`
	CREATE TABLE IF NOT EXISTS stores (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		storeName TEXT,
		storeURL TEXT,
		storeDistrict TEXT,
		storeAddress TEXT,
	);
`);

const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log("Time:", Date.now());
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// app.delete(
//     "/",
//     (req, res, next) => {
//         console.log("Time:", Date.now());
//         next();
//     },
//     (req, res) => {
//         console.log("User send command");
//         res.send("<html><h1>Hey!</h1></html>");
//     }
// );

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
