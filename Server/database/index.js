var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'MasaPotemMasaDB',
    user: 'root',
    password: '321Aleks123'
})
module.exports = connection;