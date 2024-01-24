// Import the class from the library
const { Client } = require("pg");

// Define a class
class Model {
    // Initialize an instance with the connection parameters
    constructor() {
        this.client = new Client({
            user: "postgres",
            host: "localhost",
            database: "postgres",
            password: "12345",
            port: 5432,
        });
    }

    // Define an init method that connects to the PostgreSQL database
    async init() {
        await this.client.connect();
    }

    async setup(storesJSON) {
        // Create stores table
        await this.client.query(`
            CREATE TABLE IF NOT EXISTS public.stores
            (
                id SERIAL NOT NULL,
                name text,
                url text,
                district text,
                CONSTRAINT stores_pkey PRIMARY KEY (id)
            );
        `);

        // Set owner of the table to "postgres"
        await this.client.query(`
            ALTER TABLE IF EXISTS public.stores OWNER to postgres;
        `);

        // Iterate through storesJSON and insert data into the "stores"
        for (const store of storesJSON) {
            // Check if the store already exists
            const checkForStore = await this.client.query(
                `
                SELECT * FROM public.stores
                WHERE
                name = $1
                LIMIT 1`,
                [store.name]
            );

            console.log(checkForStore.rows);

            // If the store doesn't exist, insert it into the "stores" table
            if (checkForStore.rows.length === 0) {
                await this.client.query(
                    `
                    INSERT INTO public.stores (name, url, district)
                    VALUES ($1, $2, $3)
                    `,
                    [store.name, store.url, store.district]
                );
            }
        }
    }

    // Retrieve all records from the "stores" table
    async getAllStores() {
        const res = await this.client.query("SELECT * FROM public.stores");
        return res.rows;
    }
}

// Export the model class to be used in other modules
module.exports = Model;
