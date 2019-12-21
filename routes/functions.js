var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('functions/1PhotoAnimation/4PhotoAlbum');
});

module.exports = router;
