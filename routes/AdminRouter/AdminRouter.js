



const DepartmentController = require("../../Controller/Admin/DepartmentController");
const EmployeeController = require('../../Controller/Admin/EmployeeController');

const AdminLogins=require('../../Controller/Admin/AdminLoginController');

const Admin = require('express').Router();

Admin.get("/getAllDepartments",DepartmentController.getAllDepartments);
Admin.put("/UpdatedepartmentDetails/:id",DepartmentController.UpdatedepartmentDetails);
Admin.delete("/DeletedepartmentDetails/:id",DepartmentController.DeletedepartmentDetails);
Admin.get("/getDepartmentDetailsById/:id",DepartmentController.getDepartmentDetailsById);
Admin.post("/addDepartment", DepartmentController.addDepartment);


Admin.post("/addEmployee", EmployeeController.upload.single('Photo'), EmployeeController.addEmployee);
Admin.put("/UpdateEmployeeDetails/:id", EmployeeController.upload.single('Photo'), EmployeeController.UpdateEmployeeDetails);
Admin.get("/getAllEmployees",EmployeeController.getAllEmployees);
Admin.delete("/DeleteEmployeeDetails/:id",EmployeeController.DeleteEmployeeDetails);
Admin.get("/getAllEmployees/:id",EmployeeController.getEmployeesDetailsById);
Admin.get("/getImageById/:id",EmployeeController.getImageById);


Admin.post("/addLoginDetails", AdminLogins.addLoginDetails);
Admin.post("/hardCodedUser", AdminLogins.hardCodedUser);

Admin.post("/useLoginDetails", AdminLogins.useLoginDetails);



module.exports = Admin;
