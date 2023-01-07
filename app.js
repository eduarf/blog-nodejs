const express = require('express');
require('./db/db_connection');
const pageRoute = require('./routes/pageRoute');
const entryRoute = require('./routes/entryRoute');


const app = express();

app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', pageRoute);
app.use('/entry', entryRoute);


const port = 3000;
app.listen(port, () => {
    console.log(`App Started ${port}`);
});