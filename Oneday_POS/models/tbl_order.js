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
		o_price: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		o_count: {
			type: DataTypes.INTEGER,
			allowNull: false,
			// defaultValue: 0
		},
		o_total: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		o_payment: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	})
	order.associate = (models) => {
		order.belongsTo(models.tbl_product);
	  };	

	
	return order
}