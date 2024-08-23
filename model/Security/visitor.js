module.exports = (sequelize, DataTypes) => {
    const visitor = sequelize.define("visitor", {
        Name: { 
            type: DataTypes.STRING,
           
        },
        ContactNo: { 
            type: DataTypes.STRING,
           
        },  FromPlace: { 
            type: DataTypes.STRING,
           
        },
        PurposeToVisit: { 
            type: DataTypes.STRING,
            
        },WhomToMeet:{
            type: DataTypes.STRING,
           
        },
        InTime: { 
            type: DataTypes.STRING,
           
        }
    }, {
        tableName: 'visitor'
    });
    return visitor;
};