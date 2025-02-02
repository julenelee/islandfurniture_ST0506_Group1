var mysql = require('mysql2');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Pa$$w0rd",
            database: "islandfurniture-it07"
        });
        return conn;
    }
};
module.exports = dbconnect