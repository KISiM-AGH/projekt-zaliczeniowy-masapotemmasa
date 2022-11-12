var mysql = require("mysql");
var connection = mysql.createConnection({
    host:'localhost',
    database:'masa',
    user:'root',
    password:'Madzia2002'
})
module.exports = connection;