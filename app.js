/* Import the Vue component */
const Vue = require("vue");
const JkpgCityApp = require("app.vue");

// Render Vue app
new Vue({
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
		storeAddress TEXT
	);
`);

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
