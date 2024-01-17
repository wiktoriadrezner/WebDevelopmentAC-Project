import vue from "vue";
import JkpgCityApp from "app.vue";
import "./assets/main.css";

// const vue = require("vue");
// const JkpgCityApp = require("app.vue");

// Render Vue app
new vue({
    render: (h) => h(JkpgCityApp),
}).$mount("#app");

// Database
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

// app.use((req, res, next) => {
//     console.log("Time:", Date.now());
//     next();
// });

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
