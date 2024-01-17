const sqlite3 = require("sqlite3");
const database = new sqlite3.Database("stores.db");

// NEWS
database.run(`
	CREATE TABLE IF NOT EXISTS stores (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		storeName TEXT,
		storeURL TEXT,
		storeDistrict TEXT,
		storeAddress TEXT,
	);
`);

module.exports = database;
