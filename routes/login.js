var express = require('express');
var router = express.Router();
var pool = require('./pool')

/* GET home page. */
router.get('/logininterface', function(req, res, next) {
  res.render('logininterface', { title: 'Express' });
});



module.exports = router;
