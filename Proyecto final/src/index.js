const express = require('express');

const app = express();


// settings
app.set('port', process.env.PORT || 3000);

// middlewares

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// routes

app.use('/inicio',require('./routes/rutas'))

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});