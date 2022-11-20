var express = require('express');
var router = express.Router();
var pool = require('./pool')

/* GET home page. */
router.get('/signininterface', function(req, res, next) {
  res.render('signininterface', { title: 'Express',});
});



module.exports = router;