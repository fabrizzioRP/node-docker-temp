const cors = require("cors");
const express = require('express');
const { dbpg } = require("./database/config");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use( cors() );
app.use( express.json() );
app.use( express.static("public") );

app.get('/dbusers', async ( req, res ) => {
    const results = await dbpg.query("SELECT * FROM person;");

    if( results.rows.length === 0 ){
        return res.status(204).json({ 
            msg: "No hay usuarios registrados" 
        });
    }

    res.json( results.rows );
});

app.get('/localusers', (req, res) => {
    const usuarios = require("./database/data.json");
    res.json( usuarios );
});

app.listen( port, ( err ) => {
    if( err ) throw new Error("Error en nuestro servido. ", err);
    console.log( 'Server started on port ', port );
});