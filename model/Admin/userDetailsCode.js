// model/use_details_code.js
module.exports = (sequelize, DataTypes) => {
    const useDetailsCode = sequelize.define("useDetailsCode", {
        id: { 
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        userCode: { 
            type: DataTypes.STRING(255),
            allowNull: false
        },
        userId: { 
            type: DataTypes.BIGINT,
            references: {
                model: 'super_admin',
                key: 'id'
            }
        }
    }, {
        tableName: 'user_details_code'
    });
    return useDetailsCode;
};