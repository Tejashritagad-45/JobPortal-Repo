import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { styles } from "../css/postJob"

const PostJob = () => {
    const [form, setForm] = useState({
        title: "", company: "", location: "",
        salary: "", description: "", type: "Full-time"
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};

        if (!form.title.trim()) newErrors.title = "Job title is required";
        if (!form.company.trim()) newErrors.company = "Company is required";
        if (!form.description || form.description.length < 20)

            newErrors.description = "Description must be at least 20 characters";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        const token = localStorage.getItem("token");
        try {
            await axios.post("https://jobportal-repo-7c7b.onrender.com/api/jobs", form, {
                headers: { Authorization: `Bearer ${token}` }

            });
            navigate("/dashboard");
        } catch (err) {
            alert(err.response?.data?.message || "Failed to post job");
        } finally {
            setLoading(false)
        }
    };
    return (
        <div className={styles.page}>
            <div className={styles.card}>

                <div className={styles.headerRow}>
                    <div className={styles.iconBadge}>
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                            <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
                                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            <rect x="3" y="7" width="18" height="13" rx="2"
                                stroke="currentColor" strokeWidth="1.8" />
                            <path d="M3 12h18" stroke="currentColor" strokeWidth="1.8" />
                        </svg>
                    </div>
                    <h2 className={styles.title}>Post a New Job</h2>
                </div>
                <p className={styles.subtitle}>Fill in the details below to publish a new listing</p>

                <form onSubmit={handleSubmit} className={styles.form}>

                    <div className={styles.field}>
                        <label className={styles.label}>Job Title</label>
                        <input name="title" placeholder='e.g. Senior Frontend Engineer'
                            value={form.title} onChange={handleChange}
                            className={styles.input} />
                        {errors.title && <p style={{ color: "red" }} className={styles.error}>{errors.title}</p>}
                    </div>

                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label className={styles.label}>Company</label>
                            <input name="company" placeholder='e.g. Acme Inc.'
                                value={form.company} onChange={handleChange}
                                className={styles.input} />
                            {errors.company && <p style={{ color: "red" }} className={styles.error}>{errors.company}</p>}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Location</label>
                            <input name='location' placeholder='e.g. Remote, Bengaluru'
                                value={form.location} onChange={handleChange}
                                className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label className={styles.label}>Salary</label>
                            <input name='salary' placeholder='e.g. ₹12,00,000/yr'
                                value={form.salary} onChange={handleChange}
                                className={styles.input} />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Job Type</label>
                            <select name='type' value={form.type} onChange={handleChange}
                                className={styles.select}>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.field}>
                        <label className={styles.label}>Job Description</label>
                        <textarea name='description' placeholder='Describe the role, responsibilities, and requirements...'
                            value={form.description} onChange={handleChange}
                            rows={6}
                            className={styles.textarea} />
                        {errors.description && <p style={{ color: "red" }} className={styles.error}>{errors.description}</p>}
                    </div>

                    <button type='submit' disabled={loading} className={styles.submitBtn}>
                        {loading ? (
                            "Posting..."
                        ) : (
                            <>
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                Post Job
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PostJob
