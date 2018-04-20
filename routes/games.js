var express = require('express');
var router = express.Router();
var games_dal = require('../dal/games_dal');
var team_dal = require('../dal/team_dal');

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


module.exports = router;