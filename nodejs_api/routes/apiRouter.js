const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send("OK")
})

router.get('/text', (req, res) => {
	res.send('대한민국')
})

const mJSON = {
	j_name: "홍길동",
	j_addr: "서울시",
	j_tel: "1234"
}

router.get('/json', (req, res) => {
	// 이미 선언된 mJSON 객체에 j_age라는 속성을 추가하고 값을 저장
	// 현재 mJSON 객체는 const 로 선언되어 있다
	// 하지만 객체에 요소를 추가하는 것은 허용된다
	// 단 객체 자체를 변형하거나, 다른것으로 재 선언 할 수 없다
	
	mJSON.j_age = 33
	res.json(mJSON)
})

module.exports = router