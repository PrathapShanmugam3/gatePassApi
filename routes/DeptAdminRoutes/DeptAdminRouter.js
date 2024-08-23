




const getPassController=require('../../Controller/DeptAdmin/gatePassController');

const EmployeeDetailsByDepartmentController = require('../../Controller/DeptAdmin/EmployeeDetailsByDepartmentController');


const DeptAdmin = require('express').Router();



DeptAdmin.get('/visitor/getAllVisitors',getPassController.getAllVisitors);


DeptAdmin.get('/employee/EmployeeDetailsByDepartment',EmployeeDetailsByDepartmentController.EmployeeDetailsByDepartment);




module.exports = DeptAdmin;