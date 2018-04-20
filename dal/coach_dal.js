var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function (callback) {
    var query = 'SELECT * FROM coach;';
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.insert = function (params, callback) {
    var query = 'INSERT INTO coach (coach_name,birthday,team_name) VALUES(?,?,?)'

    var queryData = [params.coach_name,params.birthday,params.team_name]

    connection.query(query,queryData,function (err,result) {
        callback(err, result);
    });
};