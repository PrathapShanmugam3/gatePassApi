const adminLogins = require('../../model').adminLogins;
const bcrypt = require('bcrypt');


const addLoginDetails = async (req, res) => {
    try {
        const { username, password,role } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const hashRole = await bcrypt.hash(role,10);
       
        const existingUser = await adminLogins.findOne({
            $or: [
                { username },
                { role }
            ]
        });

        if (existingUser) {
            res.send({ message: "User already exists" });
        } else {
            const newUser = {
                username: username,
                password: hashedPassword,
                role:hashRole
            };

            await adminLogins.create(newUser);
            res.send({ message: "Successfully saved" });
        }
    } catch (error) {
        console.error(error);
        res.send({ message: "An error occurred while adding the user" });
    }
};



const hardCodedUser = async(req,res)=>{

    const { username, password } = req.body;

    const isUsernameMatch = await bcrypt.compare(username, '$2b$10$SrjbTRjG5d3C/QxDEHKn/uT7kR6wmYTS4Bopn/hEv2FbtkyJ8cPU6');
    const isPasswordMatch = await bcrypt.compare(password, '$2a$12$k6FGJ2.0aCbq0RlXfokhXexRU9iEFjY6wdtlmxBiv6u66C3xt2xMO');

    if (isUsernameMatch && isPasswordMatch) {
        res.send({ username: username });
    } else {
        res.send({ message: "Invalid Credentials" }); // Changed to 401 for unauthorized access
    }
}




const useLoginDetails = async (req, res) => {

        const { username, password } = req.body;
        const existingUser = await adminLogins.findOne({
             username    
        });

        if (existingUser.username == username) {

            const isPasswordMatch = await bcrypt.compare(password, existingUser.password); 
            if(isPasswordMatch){

                res.send(existingUser);

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
