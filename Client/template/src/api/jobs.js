import axios from "axios";
const BASE_URL="http://localhost:5000/api";

export const getAllJobs=async()=>{
    const response=await axios.get(`${BASE_URL}/jobs`)
    console.log(response);
    
    return response.data;


}