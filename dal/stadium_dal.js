var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function (callback) {
    var query ='SELECT * FROM stadium;';
    //var query = 'CALL stadium_getall();';
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.insert = function (params, callback) {
    var query = 'INSERT INTO stadium (stadium_name,street_name,city,state,zip_code) VALUES(?,?,?,?,?)';
    var queryData = [params.stadium_name,params.street_name,params.city,params.state,params.zip_code];
    connection.query(query,queryData,function (err,result) {
        callback(err, result);
    });
    };
exports.delete = function(params, callback) {
    var query = 'Delete FROM stadium WHERE stadium_id = ?';
    var queryData = [params.stadium_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result)
    });
};
exports.getinfo = function(stadium_id, callback) {
    var query = 'CALL stadium_getinfo(?)';
    var queryData = [stadium_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};
exports.update = function(params, callback) {
    var query = 'UPDATE stadium SET stadium_name =?,street_name=?,city=?,state=?,zip_code=? WHERE stadium_id=?';
    var queryData = [params.stadium_name,params.street_name,params.city, params.state,params.zip_code,params.stadium_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result)

    });
};
