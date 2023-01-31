const express = require('express');
const session = require('express-session');
require('./db/db_connection');
const pageRoute = require('./routes/pageRoute');
const entryRoute = require('./routes/entryRoute');
const userRoute = require('./routes/userRoute');


const app = express();

app.set('view engine', 'ejs');

//global variable
global.userIN = null;

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
  }));


app.use('*', (req, res, next) => {
    userIN = req.session.userID;
    next();
});
app.use('/', pageRoute);
app.use('/entry', entryRoute);
app.use('/users', userRoute);


const port = 3000;
app.listen(port, () => {
    console.log(`App Started ${port}`);
});