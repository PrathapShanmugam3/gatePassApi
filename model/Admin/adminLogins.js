// model/AdminLogins.js
module.exports = (sequelize, DataTypes) => {
    const adminLogins = sequelize.define("AdminLogins", {
        id: { 
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        username: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false
        }, 
        role: { 
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'super_admin'
    });
    return adminLogins;
};