var express = require('express');
var router = express.Router();
var team_dal = require('../dal/team_dal');

router.get('/all',function (req,res) {
    team_dal.getAll(function (err,result) {
        if(err){
            res.send(err);
        } else {
            res.render('team/team_view_all', {teams: result[0]});
        }
    });
});


router.get('/add',function (req,res) {
    team_dal.getAll(function (err,result) {
        if (err){
            res.send(err);
        }
        else {res.render('team/team_add',{team_result:result[0]});
        }
    });
});


router.get('/insert', function(req, res){

    team_dal.insert(req.query, function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/team/all');
        }
    });
});

router.get('/edit', function(req, res) {
    team_dal.getAll(req.query.team_id, function(err, result) {

        if (err) {
            res.send(err);
        }
        else {
            res.render('team/teamUpdate', {teams: result[0][0], team_id: result[1][1], team_name: result[2]}
            );
        }
    });
});

router.get('/delete', function(req, res) {
    team_dal.delete(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/team/all' + "?&was_successful_delete=1");
        }
    });
});

router.get('/update', function(req, res) {
    team_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/team/all');
        }
    });
});


module.exports = router;