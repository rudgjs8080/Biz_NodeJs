var express = require('express');
var router = express.Router();

const {tbl_table} = require('../models/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
