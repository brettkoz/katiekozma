const express = require('express');

const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');
const authentication = require('./routes/authentication')(router);

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
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/client/dist/'));
app.use('/authentication',authentication);
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(port, () => {
    console.log('Listening On Port ' + port);
})