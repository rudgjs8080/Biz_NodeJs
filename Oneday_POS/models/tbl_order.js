const tbl_reply = require("../../nodejs_007/models/tbl_reply")

module.exports = (sequelize, DataTypes) => {
	const order = sequelize.define("tbl_order", {
		o_seq: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		o_tid: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		o_date: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		o_time: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		o_pcode: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		o_price: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	})
	
	
	return order
}