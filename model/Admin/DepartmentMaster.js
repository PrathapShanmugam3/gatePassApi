// model/Admin/DepartmentMaster.js
module.exports = (sequelize, DataTypes) => {
    const adminDepartmentMaster = sequelize.define("DepartmentMaster", {
        departmentCode: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        departmentName: { 
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'department_master'
    });
    return adminDepartmentMaster;
};
