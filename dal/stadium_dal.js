var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function (callback) {
    var query = 'SELECT * FROM stadium;';
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.insert = function (params, callback) {
    var query = 'INSERT INTO stadium (stadium_name,street_name,city,state,zip_code) VALUES(?,?,?,?,?)'


    var queryData = [params.stadium_name,params.street_name,params.city,params.state,params.zip_code];

    connection.query(query,queryData,function (err,result) {
        callback(err, result);
    });
    };