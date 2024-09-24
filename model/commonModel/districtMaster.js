module.exports = (sequelize, DataTypes) => {
    const DistrictMaster = sequelize.define('DistrictMaster', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        district_code: {
            type: DataTypes.STRING,
            allowNull: true
        },
        district_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        state_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'state_master',
                key: 'id'
            }
        }
    }, {
        tableName: 'district_master',
        timestamps: false
    });

    DistrictMaster.associate = (models) => {
        DistrictMaster.belongsTo(models.StateMaster, { foreignKey: 'state_id' });
    };

    return DistrictMaster;
};
