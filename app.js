const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pageRoute = require('./routers/pageRoute');


app.set('view engine', 'ejs');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/own-blog').then(() => console.log('db connected successfully'));



app.use(express.static('public'));
app.use('/', pageRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`App Started ${port}`);
});