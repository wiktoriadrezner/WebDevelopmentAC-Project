const db = new sqlite3.Database("stores.db");

db.run(`PRAGMA foreign_keys = ON`);

// Database table stores
db.run(`CREATE TABLE IF NOT EXISTS stores(
  id INTEGER PRIMARY KEY,
  storeName TEXT,
  storeURL TEXT,
  storeDistrict TEXT
)`);
