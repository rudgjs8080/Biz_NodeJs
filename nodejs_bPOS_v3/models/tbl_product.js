module.exports = (sequelize, DataTypes) => {

	// tbl_product가 table의 이름(변수, 객체)
	// tbl_product.findAll().. 처럼 사용한다
	// tbl_products로 생성이 되긴한다
	const product = sequelize.define('tbl_product', {
		p_code: {
			type: DataTypes.STRING(5),
			primaryKey: true
		},
		p_name: {
			type: DataTypes.STRING,
			allowNull: false // not null 로 설정
		},
		p_price: {
			type: DataTypes.INTEGER,
			allowNull: false // not null 로 설정
		},
		p_rem: {
			type: DataTypes.STRING
		}
	},{timestamps: false})

	// tble_table_orders와 tbl_product를 JOIN 할 수 있도록 설정
	// tbl_table_orders의 to_pcode 칼럼과 현재 tbl_prouct와 연계하겠다
	// 현재 table의 PK와 to_pcode를 연계하여 JOIN을 수행할 준비
	product.associate = (models) => {
		product.hasMany(models.tbl_table_orders, {foreignKey: 'to_pcode'})
	}
	return product

}