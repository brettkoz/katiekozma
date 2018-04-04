const express = require('express');
const config = require('./config/database');

const app = express();
const mongoose = require('mongoose');

mongoose.connect(config.uri,(err) =>{
    if (err){
        console.log('Could Not Connect To Databse, Motherfucker: ' + err);
    } else {
        console.log(config.secret);
        console.log('Connected to DB: ' + config.db);
    }
});

mongoose.Promise = global.Promise;
const port = 3000;
app.get('*',(req,res) => {
    res.send('Fuck off, motherfucker');
});

app.listen(port, () => {
    console.log('Listening On Port ' + port);
})