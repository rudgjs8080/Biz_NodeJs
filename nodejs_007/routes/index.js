var express = require('express');
var router = express.Router();
// models 폴더에서 정보를 읽어서
// tbl_bbs 객체를 사용할수 있도록 선언
/**
 * models/index.js는 ...
 */
const {tbl_bbs} = require('../models/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  tbl_bbs.findAndCountAll()
  .then(result =>{
    // console.log('test',result)
    res.render('index',{BBS: result.rows});
  });
});

module.exports = router;
