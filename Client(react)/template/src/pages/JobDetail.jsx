import React from 'react'
import { useState,useEffect,useRef } from 'react';
import{useParams} from "react-router-dom";
import{useAuth} from "../context/AuthContext";
import axios from 'axios'
import { styles } from "../css/jobDetail";


const JobDetail = () => {
    const {id}=useParams();
    const {user}=useAuth();
    const [job,setJob]=useState(null);
    const[coverLetter,setCoverLetter]=useState("");
    const [applied,setApplied]=useState(false);
    const textareaRef=useRef(null);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/jobs/${id}`)
         .then(res=>setJob(res.data));
    },[id]);

    const handleApply=async()=>{
        const token=localStorage.getItem("token");

        try{
            await axios.post("http://localhost:5000/api/applications", 
                {jobId:id,coverLetter},
                {headers:{Authorization:`Bearer ${token}`}}
            );
            setApplied(true);

        }catch(err){
            alert(err.response?.data?.message)
        }
    }

    if(!job) return (
        <div className={styles.loadingWrap}>
            <div className={styles.spinner} />
            <p className={styles.loadingText}>Loading...</p>
        </div>
    )
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>

            <div className={styles.headerRow}>
                <div className={styles.avatar}>{job.company?.charAt(0).toUpperCase()}</div>
                <div>
                    <h2 className={styles.title}>{job.title}</h2>
                    <p className={styles.meta}>{job.company}-{job.location}</p>
                </div>
            </div>

            <p className={styles.description}>{job.description}</p>

            {user?.role==="seeker" && ! applied &&(
                <div className={styles.applyBox}>
                    <textarea ref={textareaRef} placeholder='cover letter (optional)' 
                    value={coverLetter} onChange={e=>setCoverLetter(e.target.value)}
                    rows={4}
                    className={styles.textarea}/>
                    <button onClick={handleApply} className={styles.applyBtn}> Apply Now</button>
                </div>
            )}
            {applied && <p style={{color:"green"}} className={styles.successBox}>Application submitted</p>}
        </div>
      </div>
    </div>
  );
}



export default JobDetail
