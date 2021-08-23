const express = require('express')
const router = express.Router();

router.get('/', (req,res) =>{
    res.send("점심 뭐먹지")

})
// localhost:3000/homes/my로 요청
router.get('/my', (req, res) =>{

    const html = "<div>한국</div>";
    res.render('home', {nation : '대한민국', html})
})

router.get('/add', (req, res) =>{
    /**
     * browser에서 보내는 nuum1, num2 변수에
     * 담긴 값을 각각 추출하여 변수에 담아라
     * 이때 모든 변수는 문자열이다
     */
    const num1 = req.query.num1
    const num2 = req.query.num2
    // 문자열 변수 num1, num2에 담긴 값을 정수로 변환하여
    // 덧셈하고 sum 변수에 저장하라 
    const sum = parseInt(num1) + parseInt(num2);

    // query와 결과를 json 데이터 구조로 생성
    const result = {
        num1,
        num2,
        sum,
    }
    // json data를 web으로 응답 전송하라
    res.json(result);
})

router.get('/input', (req,res) =>{
    res.render('input')

})

router.post('/input', (req,res) =>{
    const name = req.body.name;
    const tel = req.body.tel;
    const age = req.body.age;

    console.log(req.body);

    res.json({name, tel, age})

})

module.exports = router;