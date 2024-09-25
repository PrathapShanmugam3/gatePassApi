



const commonRouter=require('express').Router();

const multer=require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const customDataController=require('../../Controller/commonController/customDataController')
const fireBaseController=require('../../Controller/commonController/firebaseController')


commonRouter.post("/getdata",customDataController.customDataGetData);

commonRouter.post("/fileUpload",upload.single('file'),fireBaseController.UploadFile);
commonRouter.get("/downloadFile",fireBaseController.DownloadFile)
commonRouter.delete("/deleteFile",fireBaseController.DeleteFile)
commonRouter.put('/updateFile',upload.single('file'),fireBaseController.UpdateFile)





module.exports=commonRouter;