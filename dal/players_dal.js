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
    var query = 'INSERT INTO players (jersey_number,team_name,first_name,last_name, position,birthday)VALUES(?,?,?,?,?,?)';
    var queryData = [params.jersey_number,params.team_name,params.first_name,params.last_name,params.position,params.birthday];
    connection.query(query,queryData,function (err,result) {
        callback(err, result);
    });
};

exports.update = function(params, callback) {
    var query = 'UPDATE players SET jersey_number = ?, team_name = ?,first_name =?,last_name=?,position=?,birthday=? WHERE player_id = ?';
    var queryData = [params.jersey_number, params.team_name, params.first_name,
    params.last_name,params.position,params.birthday,params.player_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result)

    });
};


exports.getinfo = function(player_id, callback) {
    var query = 'CALL player_getinfo(?)';
    var queryData = [player_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.delete = function(params, callback) {
    var query = 'Delete FROM players WHERE player_id = ?';
    var queryData = [params.player_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result)
    });
};
