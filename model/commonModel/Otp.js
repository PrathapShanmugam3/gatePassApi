// model/Otp.js
module.exports = (sequelize, DataTypes) => {
    const Otp = sequelize.define('Otp', {
        otp: {
            type: DataTypes.STRING,
            allowNull: false
        },email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'otps',
        timestamps: true // Or true if you have createdAt/updatedAt fields automatically managed
    });

    return Otp;
};
