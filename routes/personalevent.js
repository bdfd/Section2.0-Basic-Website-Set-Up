var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/2019', function(req, res, next) {
    res.render('personal_event/2019/2019', { layout: 'HP_Event2019'});
});

router.get('/2019/1031', function(req, res, next) {
    res.render('personal_event/2019/20191031',{ layout: 'Empty_layout'});
});

router.get('/2019/1208', function(req, res, next) {
    res.render('personal_event/2019/20191208',{ layout: 'Empty_layout'});
});

router.get('/2019/1226', function(req, res, next) {
    res.render('personal_event/2019/20191226',{ layout: 'Empty_layout'});
});

router.get('/2020', function(req, res, next) {
    res.render('personal_event/2020');
});


router.get('/2021', function(req, res, next) {
    res.render('personal_event/2021');
});

module.exports = router;