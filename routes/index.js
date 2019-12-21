var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Passcode', { layout: 'Passcode_layout' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
