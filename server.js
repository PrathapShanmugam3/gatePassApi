

const express = require("express");
const app = express();

const cors=require("cors");

app.use(cors());
app.use(express.json());  

const Admin = require("./routes/AdminRouter/AdminRouter");
const Security=require("./routes/SecurityRouter/SecurityRouter");
const DeptAdmin=require('./routes/DeptAdminRoutes/DeptAdminRouter');

app.use("/Admin",Admin);
app.use("/Security",Security);
app.use("/DeptAdmin",DeptAdmin);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
