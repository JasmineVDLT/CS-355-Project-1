var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function (callback) {
    var query = 'SELECT * FROM players;';
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.insert = function (params, callback) {
    var query = 'INSERT INTO players (jersey_number,team_name,first_name,' +
        'last_name, position,birthday)VALUES(?,?,?,?,?,?)'

    var queryData = [params.jersey_number,params.team_name,params.first_name,params.last_name,params.position,params.birthday]
    connection.query(query,queryData,function (err,result) {
        callback(err, result);
    });
};