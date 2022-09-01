const { Pool } = require("pg");
require("dotenv").config();

const connectPg = () => {

    try{
        const pool = new Pool({
            host: "postgres",
            user: "postgres",
            password: "root",
            database: "test",
            port: 5432
        });
        console.log("CONNECTED DATABASE :)");
        return pool;
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

const dbpg = connectPg();

module.exports = { dbpg }