

const adminEmployeeModel = require('../../model').adminEmployeeMaster;





const EmployeeDetailsByDepartment = async (req, res) => {

    const {Department}=req.body;
    try {
        let val = await adminEmployeeModel.findOne({where:{Department}});
        res.send(val);
    } catch (error) {
            console.error({message:"Error fetching employees:", error});
        res.send({message:"Error fetching employees"});
    }
};



module.exports={

    EmployeeDetailsByDepartment

}