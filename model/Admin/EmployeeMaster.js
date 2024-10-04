module.exports = (sequelize, DataTypes) => {
    const adminEmployeeMaster = sequelize.define("EmployeeMaster", {
        EmployeeCode: {
            type: DataTypes.STRING
        },
        Department: {
            type: DataTypes.STRING
        },
        EmployeeName: {
            type: DataTypes.STRING
        },
        Photo: {
            type: DataTypes.STRING
        },
        ContactNumber1: {
            type: DataTypes.STRING
        },
        ContactNumber2: {
            type: DataTypes.STRING
        },
        Email: {
            type: DataTypes.STRING
        },
        AddressforCommunication: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Employee_master'  // Ensure this matches your table name
    });
    return adminEmployeeMaster;
};
