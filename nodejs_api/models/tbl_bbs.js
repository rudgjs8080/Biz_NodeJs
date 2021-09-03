/**
 * mongoose를 사용하여 mongoDB 핸들링 하기
 * mongoose는 mongoDB를 ORM 방식으로 사용하기 위한 미들웨어
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
/**
 * Schema type
 * String, Number, Date, Buffer, Boolean, Mixed, Object, Array
 */
const bbs = Schema({
	b_date: String,
	b_time: String,
	b_writer: String,
	b_subject: String,
	b_text: String,
	b_comment:{
		c_date: String,
		c_time: String,
		c_writer: String,
		c_text: String
	}
})

// tbl_bbs 라는 Collection을 생성할 준비를 하라
module.exports = mongoose.model('tbl_bbs', bbs)