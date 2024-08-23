


const visitorController=require('../../Controller/Security/visitorController');

const getEmployeeController = require('../../Controller/Security/getEmployeeController');


const Security = require('express').Router();



Security.post("/visitor/addVisitor",visitorController.addVisitor);

Security.get("/employee/getEmployeesDetailsById",getEmployeeController.getEmployeesDetailsByEmployeeCode);





module.exports=Security;