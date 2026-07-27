import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { styles } from '../css/Dashboard';


const Dashboard = () => {
    const{user}=useAuth();
    const [data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    const token=localStorage.getItem("token");

    useEffect(()=>{
        const url=user.role==="employer"
        ? "http://localhost:5000/api/jobs/my/posted"
        : "http://localhost:5000/api/applications/mine";
        axios.get(url,{headers:{Authorization:`Bearer ${token}`}})
        .then(res=>{setData(res.data);setLoading(false); console.log(res);
        })

        .catch(()=>setLoading(false));
    },[user.role,token])

    if(loading) return (
        <div className={styles.loadingWrap}>
            <div className={styles.spinner} />
            <p className={styles.loadingText}>Loading your Dashboard...</p>
        </div>
    )
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.header}>
            <div className={styles.avatar}>{user.name?.charAt(0).toUpperCase()}</div>
            <div>
                <h2 className={styles.greeting}>Welcome,{user.name}</h2>
                <span className={styles.roleBadge}>Role:{user.role}</span>
            </div>
        </div>

         {user.role==="employer"?(
            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h3 className={styles.sectionTitle}>Your Posted Jobs</h3>
                    <span className={styles.sectionCount}>{data.length}</span>
                </div>
                <div className={styles.list}>
                {data.map(job=>(
                    <div key={job._id} className={styles.listItem}>
                        <span className={styles.itemTitle}>{job.title}</span>
                        <span className={styles.itemMeta}>{job.applicationCount}applications</span>
                    </div>
                ))}
                </div>
            </div>
             ):(
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h3 className={styles.sectionTitle}>Jobs You Applied To</h3>
                        <span className={styles.sectionCount}>{data.length}</span>
                    </div>
                    <div className={styles.list}>
                    {data.map(app=>(
                        <div key={app._id} className={styles.listItem}>
                            <div>
                                <span className={styles.itemTitle}>{app.job?.title}</span>
                                <span className={styles.itemMeta}> at{app.job?.company}</span>
                            </div>
                            <span className={styles.statusBadge}>status:{app.status}</span>
                        </div>
                    ))}
                    </div>
                </div>
         )}
      </div>
    </div>
  );
}

export default Dashboard
