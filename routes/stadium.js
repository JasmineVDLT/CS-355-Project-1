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
    })

});
router.get('/add',function (req,res) {
    res.render('stadium/stadium_add');
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


module.exports = router;