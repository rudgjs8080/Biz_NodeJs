module.exports = (sequelize, DataTypes) => {
	const table_orders = sequelize.define('tbl_table_orders', {
		to_seq:{
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		}, // 일련번호(PK)
		to_table_id: {type: DataTypes.STRING(5), allowNull: false}, // 주문이 진행중인 table id
		to_pcode: {type: DataTypes.STRING(5), allowNull: false}, // 주문된 상품코드
		to_qty: {type:DataTypes.INTEGER}, // 수량
		to_price: {type:DataTypes.INTEGER}, // 단가
		to_date: {type: DataTypes.STRING(10)}, // 주문한 시점의 날짜
		to_time: {type: DataTypes.STRING(10)}, // 주문한 시점의 시각
		to_pay: {type: DataTypes.STRING(1)}, // 결제 여부
		to_pay_qty: {type: DataTypes.STRING(10)} // 결제 종류(현금, 카드)
	})
	return table_orders
}