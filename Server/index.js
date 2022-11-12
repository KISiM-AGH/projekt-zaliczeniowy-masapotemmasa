//importowanie modulow
//path uzywany do odczytywania linkow
const path = require('path');
//express - backend server framework
const express = require('express');
//body parser - uzywany do interpretacji danych http
const bodyParser = require('body-parser');

var connection = require('./database')
//zmienne
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/', function (req,res){
    let sql = "SELECT * FROM masa";
    connection.query(sql, function (err,result){
        if(err) throw err;
        res.send(result)
    });
})
app.listen(PORT, ()=>{
    console.log("Server listening on port "+ PORT);
    connection.connect(function (err){
        if(err) throw err;
        console.log('Databese connected;')
    })
})

module.exports = app;
