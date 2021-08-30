const express = require('express')
const router = express.Router();
const moment = require('moment')

const {tbl_table, tbl_orders, tbl_product} = require('../models/index')

router.get('/order', (req, res) => {
	const {t_id} = req.query
	tbl_bbs.create({
		t_id: t_id,
		t_date: moment().format("YYYY[-]MM[-]DD"),
		t_time: moment().format("HH:mm:ss"),
	}).then((result) => res.redirect('/'));

module.exports = router;


