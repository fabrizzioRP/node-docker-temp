const { Pool } = require("pg");
require("dotenv").config();

const connectPg = () => {

    try{
        const pool = new Pool({
            host: process.env.HOSTPG,
            user: process.env.USERPG,
            password: process.env.PASSWORDPG,
            database: process.env.DATABASEPG,
            port: process.env.PORTPG
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