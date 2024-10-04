const adminLogins = require('../../model').adminLogins;
const userDataCode=require('../../model').userCode;
const bcrypt = require('bcrypt');
const { userCode } = require('../../model');


const addLoginDetails = async (req, res) => {
    try {
        const { username, password,role } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const hashRole = await bcrypt.hash(role,10);
       
        const existingUser = await adminLogins.findOne({where:{username}});

        if (existingUser) {
            res.send({ message: "User already exists" });
        } else {
            const newUser = {
                username: username,
                password: hashedPassword,
                role:role
            };

           const useData= await adminLogins.create(newUser);
            
           const userCode={
            userId:useData.id,
            userCode:useData.username.toUpperCase()+useData.id
           }
           const  data=await userDataCode.create(userCode);
            res.send({ message: "Successfully saved" });
        }
    } catch (error) {
        console.error(error);
        res.send({ message: "An error occurred while adding the user" });
    }
};



const hardCodedUser = async(req,res)=>{

    const { username, password } = req.body;

    const isUsernameMatch = await bcrypt.compare(username, '$2a$10$LVWfms3n2mFsrJBlT7bnc.F.8iLv//JJMGc0oTPxgWBNULITrUjBi');
    const isPasswordMatch = await bcrypt.compare(password, '$2a$10$MhF1XMCC0wwNTBstAywH/O27xpAU7mRwh.UhFLjEXi4gh5950xf66');

    if (isUsernameMatch && isPasswordMatch) {
        res.send({ username: username });
    } else {
        res.send({ message: "Invalid Credentials" }); // Changed to 401 for unauthorized access
    }
}




const useLoginDetails = async (req, res) => {

        const { username, password } = req.body;
        const existingUser = await adminLogins.findOne({where:{
             username    
        }});

        if (existingUser.username == username) {

            const isPasswordMatch = await bcrypt.compare(password, existingUser.password); 
            if(isPasswordMatch){
              const data=  await userDataCode.findOne({where:{userId:existingUser.id}})
                res.send({code:data.userCode});

            }else{
                res.send({ message: "Invalid Password" });
            }
            
        } else {
            res.send({ message: "Invalid UserName" });
            }

};




module.exports = {
    addLoginDetails,
    hardCodedUser,
    useLoginDetails

};
