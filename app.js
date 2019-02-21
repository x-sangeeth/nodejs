const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const authRoutes = require('./api/routes/auth');
const userRoutes = require('./api/routes/user');
const mongoose = require('mongoose');

require('dotenv').config();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*"),
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/auth', authRoutes);
app.use('/user', userRoutes);


const MONGO_URL ='mongodb://reiterclub:' + encodeURIComponent(process.env.MONGO_PSW) + 
'@reiter-shard-00-00-srtct.mongodb.net:27017,reiter-shard-00-01-srtct.mongodb.net:27017,reiter-shard-00-02-srtct.mongodb.net:27017/test?ssl=true&replicaSet=reiter-shard-0&authSource=admin&retryWrites=true'

// MongoDB Atles Connection
    // mongoose.connect(MONGO_URL, {
    //     auth: {
    //         user: process.env.MONGO_DB_USER,
    //         password: encodeURIComponent(process.env.MONGO_PSW),
    //     },
    //     useNewUrlParser:true
    // }, function(err, client) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log('connect!!!');
    // });


// local connection
mongoose.connect('mongodb://localhost/reiter', {
        useNewUrlParser:true
    }, function(err, client) {
        if (err) {
            console.log(err);
        }
        console.log('connect!!!');
    });

module.exports = app;
