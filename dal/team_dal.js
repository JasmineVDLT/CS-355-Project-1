var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function (callback) {
    var query = 'CALL team_getall()';
   // var query = 'SELECT * FROM team ORDER BY team_id;';
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.insert = function (params, callback) {
    var query = 'INSERT INTO team (team_name) VALUES(?)';
    var queryData = [params.team_name];
    connection.query(query,queryData,function (err,result) {
        callback(err,result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE team SET team_name = ? WHERE team_id = ?';
    var queryData = [params.team_id,params.team_name];
    connection.query(query, queryData, function(err, result) {
        callback(err, result)

    });
};


exports.getinfo = function(team_id, callback) {
    var query = 'CALL team_getinfo(?)';
    var queryData = [team_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.delete = function(params, callback) {
    var query = 'DELETE FROM team WHERE team_id = ?';
    var queryData = [params.team_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result)
    });
};
