var express = require('express');
var router = express.Router();
var players_dal = require('../dal/players_dal');
var team_dal = require('../dal/team_dal');

router.get('/all',function (req,res,next) {
    players_dal.getAll(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('players/players_view_all', {players: result});
        }
    })

});
router.get('/add',function (req,res) {
    team_dal.getAll(function (err,result) {
        if (err){
            res.send(err);
        }
        else {res.render('players/players_add',{team_result:result[0]});
        }
    });
});

router.get('/insert', function(req, res){

    players_dal.insert(req.query, function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/players/all');
        }
    });
});

module.exports = router;