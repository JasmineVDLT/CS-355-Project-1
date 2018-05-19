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
    var query = 'INSERT INTO coach (coach_name,team_name,birthday) VALUES(?,?,?)';
    var queryData = [params.coach_name,params.team_name,params.birthday];
    connection.query(query,queryData,function (err,result) {
        callback(err, result);
    });
};
exports.update = function(params, callback) {
    var query = 'UPDATE coach SET coach_name = ?,team_name = ?, birthday =?, WHERE coach_id = ?';
    var queryData = [params.coach_name,params.team_name,params.birthday, params.coach_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result)

    });
};


exports.getinfo = function(coach_id, callback) {
    var query = 'CALL coach_getinfo(?)';
    var queryData = [coach_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.delete = function(params, callback) {
    var query = 'Delete FROM coach WHERE coach_id = ?';
    var queryData = [params.coach_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result)
    });
};

