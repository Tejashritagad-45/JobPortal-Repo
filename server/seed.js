require("dotenv").config();
const mongoose=require ("mongoose");
const job=require("./models/Job")
const jobs=[
    {
        title:"Frontend Developer", 
        company:"Infosyas",
        location:"Pune",
        salary:"6-8LPA",
        description:"Build React apps",
        type:"Full-time"
    },

     {
        title:"Backend Developer", 
        company:"Accenture",
        location:"Mumbai",
        salary:"8-12LPA",
        description:"Node.js and MongoDB",
        type:"Remote"
    },
    
     {
        title:"UI/UX Designer", 
        company:"Humming Bird",
        location:"HYD",
        salary:"5-7LPA",
        description:"Figma and user research",
        type:"Full-time"
    },
    
];

mongoose.connect(process.env.MONGO_URI)
.then(async ()=>{
    await job.insertMany(jobs);
    console.log("Job seeded");
    process.exit();
    
});