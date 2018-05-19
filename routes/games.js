var express = require('express');
var router = express.Router();
var games_dal = require('../dal/games_dal');
var team_dal = require('../dal/team_dal');
var stadium_dal = require('../dal/team_dal');

router.get('/all',function (req,res,next) {
    games_dal.getAll(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('games/games_view_all', {games: result});
        }
    })

});

router.get('/add',function (req,res) {
    team_dal.getAll(function (err,result) {
        if (err){
            res.send(err);
        }
        else {res.render('games/games_add',{team_result:result[0]});
        }
    });
});
router.get('/add',function (req,res) {
    stadium_dal.getAll(function (err,result) {
        if (err){
            res.send(err);
        }
        else {res.render('games/games_add',{stadium_result:result[0]});
        }
    });
});

router.get('/insert', function(req, res){

    games_dal.insert(req.query, function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/games/all');
        }
    });
});


router.get('/edit', function(req, res) {
    games_dal.getinfo(req.query.game_id, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('games/gamesUpdate', {games: result[0][0], game_date: result[1][1], start_time: result[2],
                stadium_id: result[3],team_name:result[4]}
            );
        }
    });
});
router.get('/update', function(req, res) {
    games_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/games/all');
        }
    });
});

router.get('/delete', function(req, res) {
    games_dal.delete(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/games/all' + "?&was_successful_delete=1");
        }
    });
});
module.exports = router;