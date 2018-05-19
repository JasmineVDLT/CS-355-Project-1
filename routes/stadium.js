var express = require('express');
var router = express.Router();
var stadium_dal = require('../dal/stadium_dal');

router.get('/all',function (req,res,next) {
    stadium_dal.getAll(function (err,result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('stadium/stadium_view_all', {stadiums: result});
        }
    }
    )

});
router.get('/add',function (req,res) {
    stadium_dal.getAll(function (err,result) {
        if (err){
            res.send(err);
        }
        else {res.render('stadium/stadium_add',{stadiums:result[0]});
        }
    });
});


router.get('/insert', function(req, res){

    stadium_dal.insert(req.query, function(err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/stadium/all');
        }
    });
});
router.get('/edit', function(req, res){
    stadium_dal.getinfo(req.query.stadium_id, function(err, result) {
        if(err) { res.send(err); }
        else {
            res.render('stadium/stadiumUpdate',
                {stadiums: result[0][0], stadium_name: result[1][1],street_name: result[2],city:result[3],
                    state:result[4],zip_code:result[5]
                }
            );
        }
    });
});

router.get('/delete', function(req, res) {
    stadium_dal.delete(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/stadium/all' + "?&was_successful_delete=1");
        }
    });
});

router.get('/update', function(req, res) {
    stadium_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/stadium/all');
        }
    });
});module.exports = router;