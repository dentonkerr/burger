var mysql = require("mysql");

var connection = mysql.createConnection ({
    port: 3306,
    host: "otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "dwmwt4ae4bphbytf",
    password: "z7uy5f1430xhl3mh",
    database: "o41bkyskeu7aufg8"
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;