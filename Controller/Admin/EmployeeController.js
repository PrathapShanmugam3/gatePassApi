const adminEmployeeModel = require('../../model').adminEmployeeMaster;
const uploadImage=require('../commonController/firebaseController').UploadFile;
const deleteFile=require('../commonController/firebaseController').DeleteFile;
const DeleteFileByBody=require('../commonController/firebaseController').DeleteFileByBody;

const multer = require('multer');


const upload = multer();

const addEmployee = async (req, res) => {

    const response=await uploadImage(req);
    console.log(response);
    
   
    try {
        const Photo = req.file ? req.file.buffer : null;
        let Employee = {
            EmployeeCode: req.body.EmployeeCode,
            EmployeeName: req.body.EmployeeName,
            Department:req.body.Department,
            Photo: response.fileUrl,
            ContactNumber1: req.body.ContactNumber1,
            ContactNumber2: req.body.ContactNumber2,
            Email: req.body.Email,
            AddressforCommunication: req.body.AddressforCommunication,
        };
        await adminEmployeeModel.create(Employee);
        res.send({message:"Successfully saved"});
    } catch (error) {
        console.error({message:"Error saving employee:", error});
        res.send({message:"Error saving employee"});
    }
};

const UpdateEmployeeDetails = async (req, res) => {
    try {

        console.log(req.body);
        
        const response1=await DeleteFileByBody(req);
        console.log(response1);

        const response=await uploadImage(req);
        console.log(response);
        
        const { id } = req.params;
        const { EmployeeCode, EmployeeName, ContactNumber1, ContactNumber2, Email, AddressforCommunication } = req.body;

        let updateData = {
            EmployeeCode,
            EmployeeName,
            ContactNumber1,
            Photo: response.fileUrl,
            ContactNumber2,
            Email,
            AddressforCommunication
        };

  

        await adminEmployeeModel.update(
            updateData,
            { where: { id } }
        );

        res.send({message:'Employee details updated successfully'});
    } catch (error) {
        console.error("Error updating employee details:", error);
        res.send({message:"Error updating employee details"});
    }
};

const getAllEmployees = async (req, res) => {
    try {
        let val = await adminEmployeeModel.findAll({});
        res.send(val);
    } catch (error) {
        console.error({message:"Error fetching employees:", error});
        res.send({message:"Error fetching employees"});
    }
};


const DeleteEmployeeDetails=async(req,res)=>{
 
    const {id}=req.params;
    console.log(req.params);
    
     const response=await deleteFile(req);
        console.log(response);

    
   
     await adminEmployeeModel.destroy({
        where: { id }
    });
     
     res.send({message:'Employee Deleted successfully'});
 }

 const getEmployeesDetailsById = async (req, res) => {

    const {id}=req.params;
    try {
        let val = await adminEmployeeModel.findOne({where:{id}});
        res.send(val);
    } catch (error) {
            console.error({message:"Error fetching employees:", error});
        res.send({message:"Error fetching employees"});
    }
};


const getImageById= async (req,res)=>{
    const {id}=req.params;
    try {
        let val = await adminEmployeeModel.findOne({where:{id}});
        res.send(val.Photo);
    } catch (error) {
        console.error({message:"Error fetching employees:", error});
        res.send({message:"Error fetching employees"});
    }
}

module.exports = {
    addEmployee,
    upload,
    getAllEmployees,
    UpdateEmployeeDetails,
    DeleteEmployeeDetails,
    getEmployeesDetailsById,
    getImageById
};
