const express = require('express')
const router = express.Router()
const BBS = require('../models/tbl_bbs')

router.get('/push', (req, res) =>{
	const bbsVO = new BBS({
		b_date : '2021-09-03',
		b_time : '11:28:19',
		b_writer: '홍길동',
		b_subject: '잠온다',
		b_text: '몽고 DB에 데이터 연동하기'
	})
	bbsVO.save((err) => {
		if(err) {
			console.log(err)
		}
		res.send('OK')
	})
})

router.get('/push_find', async (req,res) => {
	const bbsVO = {
		b_date : '2021-09-03',
		b_time : '11:42:12',
		b_wrtier : '기경헌',
		b_subject : '내일은 공부',
		b_text : '쉬고싶다'
	}
	// await BBS.insertMany(bbsVO)
await BBS.create(bbsVO)
const result = await BBS.find({})
await res.json(result)
})

router.post('/write', async (req,res) => {
	await console.log(req.body)
	await BBS.create(req.body)
	const result = await BBS.find({})
	res.json(result)
})

module.exports = router