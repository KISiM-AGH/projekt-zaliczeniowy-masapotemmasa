const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
var connection = require('./database')

//zmienne
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
    connection.connect(function (err) {
        if (err)
            throw err;
        console.log('Databese connected;')
    })
})

app.get('/test', function (req, res) {
    let sql = "SELECT * FROM Login";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
})


app.post('/login', (req, res) => {
    const loginName = req.body.loginName;
    const loginPassword = req.body.loginPassword;
    connection.query(
        "INSERT INTO Login (LoginName, LoginPassword) VALUES(?,?)",
        [loginName, loginPassword],
        (err, result) => {
            console.log(err);
        }
    );
});

app.get('/PakietName', function (req, res) {
    let sql = "SELECT Pakiet.NamePakiet FROM MasaPotemMasaDB.Pakiet";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
})
app.get('/Pakiet', function (req, res) {
    let sql = "SELECT * FROM MasaPotemMasaDB.Pakiet";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
})
app.get('/PakietSummary', function (req, res) {
    let sql = "SELECT Pakiet.SummaryPakiet FROM MasaPotemMasaDB.Pakiet";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
})
app.get('/PakietPrice', function (req, res) {
    let sql = "SELECT Pakiet.PricePakiet FROM MasaPotemMasaDB.Pakiet";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
})
app.get('/Krakow', function (req, res) {
    let sql = "SELECT Silownia.SilowniaName,Silownia.SilowniaAdres, Silownia.SilowniaSauna,Miasto.MiastoName\n" +
        "FROM Silownia\n" +
        "INNER JOIN Miasto on Miasto.idMiasto = Silownia.idMiasto \n" +
        "Where Miasto.idMiasto = 1";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
})
app.get('/Warsaw', function (req, res) {
    let sql = "SELECT Silownia.SilowniaName,Silownia.SilowniaAdres, Silownia.SilowniaSauna,Miasto.MiastoName\n" +
        "FROM Silownia\n" +
        "INNER JOIN Miasto on Miasto.idMiasto = Silownia.idMiasto \n" +
        "Where Miasto.idMiasto = 2";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
})
module.exports = app;