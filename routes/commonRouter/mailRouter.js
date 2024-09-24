





const mailRouter=require('express').Router();

const mailController=require('../../Controller/commonController/mailController')


mailRouter.post("/sendMail",mailController.sendOtp);

mailRouter.post("/verifyOtp",mailController.verifyOtp);





module.exports=mailRouter;