const { Pool } = require("pg");
require("dotenv").config();

const connectPg = () => {

    try{
        const pool = new Pool({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            port: process.env.PORTDB
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