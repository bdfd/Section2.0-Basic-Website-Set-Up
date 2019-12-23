var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/01', function(req, res, next) {
    res.render('personal_experience/01');
});

router.get('/02', function(req, res, next) {
    res.render('personal_experience/02');
});


router.get('/03', function(req, res, next) {
    res.render('personal_experience/03');
});

router.get('/04', function(req, res, next) {
    res.render('personal_experience/04');
});
module.exports = router;