var express = require('express');
var router = express.router();
const inventory = require('../model/inventory');

router.get('/', function(req, res, next) {
  res.render('inventory');
});

/* GET home page. */
router.POST('/store', async function(req, res) {
  inventory.store(req.body, function(err, result){
  res.redirect('/inventory');
});
});
module.exports = router;

module.exports = router;
