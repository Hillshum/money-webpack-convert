var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('currency', {title: 'Currency Rates'});
});

module.exports = router;
