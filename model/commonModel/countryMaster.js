module.exports = (sequelize, DataTypes) => {
    const CountryMaster = sequelize.define('CountryMaster', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        country_code: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dial_code: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'country_master',
        timestamps: false // If you don't have createdAt, updatedAt fields
    });

    return CountryMaster;
};
