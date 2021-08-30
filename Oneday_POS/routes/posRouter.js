const express = require('express')
const router = express.Router();
const moment = require('moment')

const {tbl_order, tbl_product} = require('../models/index')

router.get('/table', (req, res) => {
	const {o_tid} = req.query
	const TABLE = {
		o_date : moment().format("YYYY[-]MM[-]DD"),
		o_time : moment().format("HH:mm:ss")
	}
	
	// console.log(t_id)
	tbl_order.findAll({
		where: {o_tid: o_tid, o_payment: false}
	}).then((o) =>{
		tbl_product.findAll().then(result => {
			console.log('o', o)
			res.render('order', {o_tid, TABLE, PRODUCT: result, ORDER: o})
		})
	})
})
router.post('/table', (req, res) => {
	const {p_code} = req.query.p_code
	console.log("1", p_code)
	const {o_tid} = req.query.o_tid
	console.log("2", o_tid)
	const {p_price} = req.query.p_price
	console.log("3", p_price)
	tbl_order.create({
		p_code: p_code,
		p_price: p_price,
		o_tid: o_tid
	}).then(result => {
		res.redirect('/')
	})

	
})

module.exports = router;