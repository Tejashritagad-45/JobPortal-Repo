import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from "../css/Jobcard.js"

const JobCard = ({ title, company, location, salary, type, _id }) => {
    const initial = company ? company.charAt(0).toUpperCase() : "?";

    return (
        <div className={styles.card}>
            <Link to={`/jobs/${_id}`} className={styles.link}>

                <div className={styles.topRow}>
                   
                    <div className={styles.titleWrap}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.company}>{company}</p>
                    </div>
                </div>

                <div className={styles.metaRow}>
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                        />
                        <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                    {location}
                </div>

                <div className={styles.footer}>
                    <div className={styles.salaryRow}>
                      
                        <span className={styles.salary}>{salary}</span>
                    </div>
                    <span className={styles.badge}>{type}</span>
                </div>

            </Link>
        </div>
    )
}
export default JobCard;
