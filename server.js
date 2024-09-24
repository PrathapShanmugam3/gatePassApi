

const express = require("express");
const app = express();

const CronJob=require('./DB_Config/cronjob');
const cors=require("cors");

app.use(cors());
app.use(express.json());  

const Admin = require("./routes/AdminRouter/AdminRouter");
const Security=require("./routes/SecurityRouter/SecurityRouter");
const DeptAdmin=require('./routes/DeptAdminRoutes/DeptAdminRouter');
const mailRouter=require('./routes/commonRouter/mailRouter');
const commonRouter=require('./routes/commonRouter/commonRouter')

app.use("/Admin",Admin);
app.use("/Security",Security);
app.use("/DeptAdmin",DeptAdmin);
app.use("/mail",mailRouter);

app.use("/customdata",commonRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
