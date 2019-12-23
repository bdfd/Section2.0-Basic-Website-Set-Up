var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/01', function(req, res, next) {
    res.render('personal_project/01');
});

router.get('/02', function(req, res, next) {
    res.render('personal_project/02');
});


router.get('/03', function(req, res, next) {
    res.render('personal_project/03');
});

router.get('/04', function(req, res, next) {
    res.render('personal_project/04');
});
module.exports = router;