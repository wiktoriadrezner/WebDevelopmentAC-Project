/* Draft */

const pg = require("pg");

class DB {
    constructor() {
        this.pg = new pg.Pool({
            user: "your_username",
            host: "your_host",
            database: "your_databse",
            password: "your_password",
            port: 5432, //Default port
        });
    }
    async getUserFromUsername(username) {
        const query = "SELECT * FROM users WHERE username = $1";
        const values = [username];
        const result = await this.pg.query(query, values);
        return result.rows[0];
    }
}
