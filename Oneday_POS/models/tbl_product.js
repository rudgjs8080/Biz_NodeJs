module.exports = (sequelize, DataTypes) => {
	const product = sequelize.define('tbl_product', {
		p_code: {
			type: DataTypes.STRING(5),
			primaryKey: true
		},
		p_name: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		p_price: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		p_detail: {
			type: DataTypes.STRING(255)
		},
	}, {timestamps: false})
	product.associate = (models) => {
		product.hasMany(models.tbl_order, { foreignKey: "o_pcode" });
	  };
	return product;

}