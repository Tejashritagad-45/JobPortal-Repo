const mongoose=require ("mongoose")

const jobSchema=new mongoose.Schema({
    title: {type: String, required: true},
    company:{type:String ,required: true},
    location:{type:String, required:true},
    salary:{type:String} , //6.8LPA
    description:{type:String , required:true},
    type:{type : String ,enum :["Full-time", "Remote"],default:"Full-time"},
   postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // links t0 the employer
   }, { timestamps: true }); // auto-adds createdAt

   module.exports=mongoose.model("Job",jobSchema)