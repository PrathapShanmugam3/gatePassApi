module.exports = (sequelize, DataTypes) => {
    const StateMaster = sequelize.define('StateMaster', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        state_code: {
            type: DataTypes.STRING,
            allowNull: true
        },
        state_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'country_master',
                key: 'id'
            }
        }
    }, {
        tableName: 'state_master',
        timestamps: false
    });

    StateMaster.associate = (models) => {
        StateMaster.belongsTo(models.CountryMaster, { foreignKey: 'country_id' });
    };

    return StateMaster;
};
