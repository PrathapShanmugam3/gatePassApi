

const visitor =require ('../../model').visitor;






const getAllVisitors=async(req,res)=>{
    try {
        let val = await visitor.findAll({});
        res.send(val);
    } catch (error) {
        console.error({message:"Error fetching Visitors:", error});
        res.send({message:"Error fetching Visitors"});
    }

}








module.exports={

    getAllVisitors

}