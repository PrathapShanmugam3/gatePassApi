module.exports = (sequelize, DataTypes) => {
    const TalukMaster = sequelize.define('TalukMaster', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        taluk_code: {
            type: DataTypes.STRING,
            allowNull: true
        },
        talukt_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        district_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'district_master',
                key: 'id'
            }
        }
    }, {
        tableName: 'taluk_master',
        timestamps: false
    });

    TalukMaster.associate = (models) => {
        TalukMaster.belongsTo(models.DistrictMaster, { foreignKey: 'district_id' });
    };

    return TalukMaster;
};
