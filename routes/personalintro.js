var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/01', function(req, res, next) {
    res.render('personal_intro/01');
});

router.get('/02', function(req, res, next) {
    res.render('personal_intro/02');
});


router.get('/03', function(req, res, next) {
    res.render('personal_intro/03');
});

router.get('/04', function(req, res, next) {
    res.render('personal_intro/04');
});
module.exports = router;