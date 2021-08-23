// express framework의 객체 선언
const express = require('express');

// express framework에서 routing을 수행하기 위한
// sub 객체 선언
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', (req, res, next) =>{
  res.send("보일러 고쳐줘잉");
});

router.get('/json', (req, res) =>{
  let mData = {
    name:"홍길동",
    tel: "1234",
    age :33,
  }
  res.json(mData)
})

// 다른 js 에서 import(require)하여 사용할 수 있게 하는 것
// controller 객체를 내보내기 
module.exports = router;
