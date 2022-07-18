const cors = require("cors");
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use( cors() );
app.use( express.json() );
app.use( express.static("public") );

app.get('/users', (req, res) => {
    const usuarios = require("./database/data.json");
    res.json( usuarios );
});

app.listen( port, ( err ) => {
    if( err ) throw new Error("Error en nuestro servido. ", err);
    console.log( 'Server started on port ', port );
});