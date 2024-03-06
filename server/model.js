// Import the class from the library
const { Pool } = require("pg");

const stores = require("./stores.json");

// Define a class
class Model {
    // Initialize an instance with the connection parameters
    constructor() {
        this.connection = new Pool({
            user: "postgres",
            host: process.env.POSTGRES_HOST || "localhost",
            database: "postgres",
            password: "12345",
            port: 5432,
        });
    }

    // Define an connectDatabase method that connects to the PostgreSQL database
    async connectDatabase() {
        await this.connection.connect();
    }

    async setupDatabase() {
        // Create stores table
        await this.connection.query(`
            CREATE TABLE IF NOT EXISTS public.stores
            (
                id SERIAL NOT NULL,
                name text,
                url text,
                district text,
                address text,
                category text,
                img text,
                CONSTRAINT stores_pkey PRIMARY KEY (id)
            );
        `);

        // Set owner of the table to "postgres"
        await this.connection.query(`
            ALTER TABLE IF EXISTS public.stores OWNER to postgres;
        `);

        // Iterate through stores and insert data into the "stores"
        for (const store of stores) {
            // Check if the store already exists
            const { rows } = await this.connection.query(
                `
                SELECT * FROM public.stores WHERE name = $1 LIMIT 1
                `,
                [store.name]
            );

            // If the store doesn't exist, insert it into the "stores" table
            if (rows.length === 0) {
                await this.connection.query(
                    `
                    INSERT INTO public.stores (name, url, district, address, category, img)
                    VALUES ($1, $2, $3, $4, $5, $6)
                    `,
                    [store.name, store.url, store.district, store.address, store.category, store.img]
                );
            }
        }
    }

    // Retrieve all records from the "stores" table
    async getAllStores() {
        const { rows } = await this.connection.query("SELECT * FROM public.stores");
        return rows;
    }
}

// Export the model class to be used in other modules
module.exports = Model;
