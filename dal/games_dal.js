var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function (callback) {
    var query = 'SELECT * FROM games;';
    var query ='SELECT * FROM Home_Games'
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.insert = function (params, callback) {
    var query = 'INSERT INTO games (game_date,start_time,stadium_id,team_name) VALUES(?,?,?,?)'

    var queryData = [params.game_date,params.start_time,params.stadium_id,params.team_name];
    connection.query(query,queryData,function (err,result) {
        callback(err, result);
    });
};