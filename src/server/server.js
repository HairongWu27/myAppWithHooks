'use strict';
const express    = require('express');
const bodyParser = require('body-parser');
let cors = require('cors');

const app = express();

const router = require('./router');
const mongoose = require('mongoose');
//var mongoosePaginate = require('mongoose-paginate-v2');

mongoose.connect('mongodb://localhost:27017/myNewDB', {userNewUrlParse: true});

app.use(bodyParser.urlencoded({ extended: true}));
//app.use(bodyParser.json());

const port = process.env.PORT || 8000;
app.use(cors());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Resource-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    //console.log("request url=" + req.url);
    next();

})

app.use('/api', router);
app.get('/', (req, res) =>{
    res.json({message: 'welome to Here 123'});
});

app.listen(port, ()=>{
    console.log('Magic happen on port' + port)
});
