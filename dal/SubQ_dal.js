var mysql = require('mysql');
var db = require('./db_connection.js');
var connection = mysql.createConnection(db.config);

exports.getAll = function (callback) {
    var query = "SELECT coach_name\n" +
        "FROM coach C\n" +
        "WHERE coach_name >\n" +
        "                    (SELECT position\n" +
        "                     FROM players P\n" +
        "                     WHERE P.player_id = \n" +
        "\t\t\t\t\t\t\t C.coach_id);";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll2 = function (callback) {
    var query = "SELECT players.team_name\n" +
        "FROM (SELECT coach.* FROM team T \n" +
        "JOIN player_team pt ON T.team_id = pt.team_id \n" +
        "RIGHT JOIN coach  ON coach.coach_id = pt.player_id) players;";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll3 = function (callback) {
    var query = "SELECT team_name FROM team\n" +
        "WHERE team_id IN (SELECT team_id FROM player_team\n" +
        "\t\t\t\tWHERE player_team.team_id = 1);";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};

exports.getAll4 = function (callback) {
    var query = "SELECT first_name,last_name\n" +
        "FROM players\n" +
        "WHERE EXISTS\n" +
        "(SELECT player_id FROM player_team\n" +
        "WHERE players.player_id=player_team.player_id);";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll5 = function (callback) {
    var query = "";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll6 = function (callback) {
    var query = "SELECT first_name,last_name,jersey_number,birthday\n" +
        "FROM players\n" +
        "WHERE jersey_number > 1\n" +
        "GROUP BY jersey_number;";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll7 = function (callback) {
    var query = "select count(player_id) as total\n" +
        "from team T\n" +
        "left join player_team pt ON T.team_id = pt.player_id\n" +
        "group by T.team_id\n" +
        "HAVING count(total)> max(total);";
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll8 = function (callback) {
    var query = "SELECT first_name,last_name,team_name,jersey_number,birthday\n" +
        "FROM players\n" +
        "ORDER BY team_name;" ;
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};

exports.getAll9 = function (callback) {
    var query = "SELECT team_name FROM players\n" +
        "UNION\n" +
        "SELECT team_name FROM coach;\n" ;
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};
exports.getAll10 = function (callback) {
    var query = "SELECT DISTINCT first_name, last_name, birthday,team_name\n" +
        "FROM players;" ;
    connection.query(query,function (err,result) {
        callback(err,result);
    });
};

