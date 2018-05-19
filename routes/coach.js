var express = require('express');
var router = express.Router();
var coach_dal = require('../dal/coach_dal');
var team_dal = require('../dal/team_dal');


router.get('/all',function (req,res,next) {
    coach_dal.getAll(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('coach/coach_view_all', {coaches: result});
        }
    })

});

router.get('/add',function (req,res) {
    team_dal.getAll(function (err,result) {
        if (err){
            res.send(err);
        }
        else {res.render('coach/coach_add',{team_result:result[0]});
        }
    });
});



router.get('/insert', function(req, res){

    coach_dal.insert(req.query, function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/coach/all');
        }
    });
});
router.get('/edit', function(req, res){
    coach_dal.getinfo(req.query.coach_id, function(err, result) {
        if(err) { res.send(err); }
        else {
            res.render('coach/coachUpdate',
                {coaches: result[0][0], coach_name: result[1][1],team_name: result[2],birthday:result[3]
                   }
            );
        }
    });
});

router.get('/delete', function(req, res) {
    coach_dal.delete(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/coach/all' + "?&was_successful_delete=1");
        }
    });
});

router.get('/update', function(req, res) {
    coach_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/coach/all');
        }
    });
});

module.exports = router;