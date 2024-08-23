

const visitor =require ('../../model').visitor;



const addVisitor=async(req,res)=>{

    const visitorData={
        Name:req.body.Name,
        ContactNo:req.body.ContactNo,
        FromPlace:req.body.FromPlace,
        PurposeToVisit:req.body.PurposeToVisit,
        WhomToMeet:req.body.WhomToMeet,
        InTime:req.body.InTime

    }

    await visitor.create(visitorData);
    res.status(200).send("Successfully saved");

}



module.exports={
    addVisitor
}