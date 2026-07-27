const express=require("express");
const router=express.Router();

const Application=require("../models/Application");
const verifyToken=require("../middaleware/verifyToken");

router.post("/",verifyToken,async(req,res)=>{
    if(req.user.role !=="seeker")
        return res.status(403).json({message:"Only job seekers can apply"});
    const {jobId,coverLetter}=req.body;

    const existing=await Application.findOne({job:jobId,applicant:req.user.id });

    


if(existing) return res.status(400).json({message:"Already applied"});

 const app=await Application.create({job:jobId,applicant:req.user.id,coverLetter});

res.status(201).json(app);

});

router.get("/mine",verifyToken,async(req,res)=>{
    const app=await Application.find({applicant:req.user.id}).populate("job");
    res.json(app);
});

module.exports=router;