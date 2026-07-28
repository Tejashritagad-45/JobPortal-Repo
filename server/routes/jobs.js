const verifyToken=require("../middaleware/verifyToken");
const express=require("express");
const router=express.Router();
const Job = require("../models/Job");

 router.post("/",verifyToken,async (req,res)=>{
    if(req.user.role !== "employer"){
        return res.status(403).json({message:"Only employers can post jobs"});

    }
    const{title,company,location,salary,description,type}=req.body;
    try{
        const job=await Job.create({
            title,company,location,salary,description,type,postedBy:req.user.id,
        });
        res.status(201).json(job);

    }catch(err){
        res.status(400).json({message:err.message})
    }
 });

 
 


router.get("/",async (req,res)=>{
    try{
        const jobs= await Job.find().sort({createdAt :-1});
        res.json(jobs);
    }catch(err){
        res.status(500).json({message:"server error"});
    }
});

router.get("/my/posted",verifyToken,async(req,res)=>{
    const jobs=await Job.find({postedBy:req.user.id}).sort({createdAt:-1});

    const Application=require("../models/Application");
    const jobsWithCount=await Promise.all(jobs.map(async (job)=>{
        const count=await Application.countDocuments({job:job._id});
        return {...job.toObject(),applicationCount:count};
    }));
    res.json(jobsWithCount);
})


 router.get("/:id",async (req,res)=>{
    try{
        const job=await Job.findById(req.params.id);
        if(!job) return res.status(404).json({message:"Job not found"});
        res.json(job);
    }catch{
        res.status(500).json({message:"Server error"})
    }
})
 module.exports=router;