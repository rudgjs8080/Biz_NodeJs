module.exports = (sequelize, DataTypes) => {
	const table = sequelize.define('tbl_table',{
		t_seq : {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		t_id : {
			type: DataTypes.STRING(10),
			allowNull : false
		},
		t_date : {
			type: DataTypes.STRING(10),
			allowNull : false
		},
		t_time : {
			type: DataTypes.STRING(10),
			allowNull : false
		},
		t_yn : {
			type: DataTypes.BOOLEAN,
			allowNull : false,
			defaultValue: false
		}, 
	},
		{timestamps: false}
	)
	
	return table;
}