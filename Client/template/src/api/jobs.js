import axios from "axios";
const BASE_URL = "https://jobportal-repo-7c7b.onrender.com/api";

export const getAllJobs=async()=>{
    const response=await axios.get(`${BASE_URL}/jobs`)
    console.log(response);
    
    return response.data;


}