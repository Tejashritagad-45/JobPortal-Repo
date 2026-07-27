const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config();

const app=express();

const PORT=process.env.PORT || 5000;
app.use(cors());
app.use(express.json())

// Middleware
const jobRoutes=require("./routes/jobs");
app.use("/api/jobs",jobRoutes)

const authRoutes=require("./routes/auth");
app.use("/api/auth",authRoutes) 

const applicationRoutes=require("./routes/Applications");
app.use("/api/Applications",applicationRoutes)

app.get("/",(req,res)=>{
    res.json({ message:"Job portal Api is running"});
})


mongoose.connect(process.env.MONGO_URI)  //reads database URL from env
.then(()=>{
    console.log("Mongodb connected");
    app.listen(PORT,()=>{
    console.log(`server run on port: ${PORT}`);
    
})
    
})
.catch((error)=>{
  console.log(error);
  
})
