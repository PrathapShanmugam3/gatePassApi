

const adminDepartmentModel = require('../../model').adminDepartmentMaster;

const addDepartment = async (req, res) => {
    try {
        const { departmentCode, departmentName } = req.body;

        // Check if a department with the same departmentCode or departmentName already exists
        const existingDepartment = await adminDepartmentModel.findOne({ where: { departmentCode } });
        const existingDepartment1 = await adminDepartmentModel.findOne({ where: { departmentName } });

        if (existingDepartment || existingDepartment1) {
            return res.status(400).json({ message: "Department already exists" });
        } else {
            const newDepartment = {
                departmentCode: departmentCode,
                departmentName: departmentName
            };

            await adminDepartmentModel.create(newDepartment);
            return res.status(201).json({ message: "Successfully saved" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred while saving the department" });
    }
};

module.exports = { addDepartment };




const getAllDepartments=async(req,res)=>{
    let val=await adminDepartmentModel.findAll({});
    res.send(val);
}


const UpdatedepartmentDetails=async(req,res)=>{
 
   const {id}=req.params;
    const { departmentCode, departmentName } = req.body;
  
    await adminDepartmentModel.update(
        { departmentName:departmentName,departmentCode:departmentCode },
        { where:{id} }
    );
    
    res.send({message:'Department details updated successfully'});
}





const DeletedepartmentDetails=async(req,res)=>{
 
    const {id}=req.params;

   
     await adminDepartmentModel.destroy({
        where: { id }
    });
     
     res.send({message:'Department Deleted successfully'});
 }


 const getDepartmentDetailsById = async (req, res) => {

    const {id}=req.params;
    try {
        let val = await adminDepartmentModel.findOne({where:{id}});
        res.send(val);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.send({message:"Error fetching employees"});
    }
};





module.exports = {
    addDepartment,
    getAllDepartments,
    UpdatedepartmentDetails,
    DeletedepartmentDetails,
    getDepartmentDetailsById
    

};
