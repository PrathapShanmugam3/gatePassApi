

const adminEmployeeModel = require('../../model').adminEmployeeMaster;





const getEmployeesDetailsByEmployeeCode = async (req, res) => {

    const {EmployeeCode}=req.body;
    try {
        let val = await adminEmployeeModel.findOne({where:{EmployeeCode}});
        res.send(val);
    } catch (error) {
            console.error({message:"Error fetching employees:", error});
        res.send({message:"Error fetching employees"});
    }
};




module.exports={

    getEmployeesDetailsByEmployeeCode
}