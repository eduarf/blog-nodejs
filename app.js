const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pageRoute = require('./routers/pageRoute');
const entryRoute = require('./routers/entryRoute');


app.set('view engine', 'ejs');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/own-blog').then(() => console.log('db connected successfully'));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', pageRoute);
app.use('/entry', entryRoute);


const port = 3000;
app.listen(port, () => {
    console.log(`App Started ${port}`);
});