import { useState, useEffect } from "react";
import JobCard from "../components/Jobcard";
import { getAllJobs } from "../api/jobs";
import SearchBar from "../components/SearchBar";
import { styles } from "../css/Home";

function Home() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("");



    useEffect(() => {
        getAllJobs()
            .then((data) => {
                setJobs(data);
                setLoading(false);
            })
            .catch((error) => {
                setError("failed to load jobs");
                setLoading(false)
            })
    }, []);

    const filterdJobs = jobs.filter(job => {
        const matchessearch = job.title.toLowerCase().includes(searchTerm.toLowerCase())
            || job.company.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType = filterType === "" || job.type.toLowerCase() === filterType.toLowerCase();
        return matchessearch && matchesType;
    })

    return (
        <div className={styles.page}>

            <div className={styles.hero}>
                {/* decorative blobs, same family as Register/Login */}
                <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 opacity-30 blur-3xl rounded-full bg-indigo-200" />
                <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 opacity-30 blur-3xl rounded-full bg-violet-200" />

                <span className={styles.heroEyebrow}>JobPortal</span>

                <h1 className={styles.heroTitle}>
                    Find Your <span className={styles.heroAccent}>Dream Job</span>
                </h1>

                <p className={styles.heroText}>
                    Discover thousands of opportunities from top companies.
                </p>

                <div className={styles.searchWrap}>
                    <SearchBar
                        onSearch={(value) => setSearchTerm(value)}
                        onFilter={(value) => setFilterType(value)}
                    />
                </div>
            </div>

            <div className={styles.jobsSection}>

                {!loading && !error && (
                    <div className={styles.headingRow}>
                        <h2 className={styles.heading}>
                            Available Jobs
                        </h2>

                        <span className={styles.count}>
                            {filterdJobs.length} Jobs
                        </span>
                    </div>
                )}

                {loading && (
                    <div className={styles.centerState}>
                        <div className={styles.spinner} />
                        <p className={styles.stateText}>Loading jobs...</p>
                    </div>
                )}

                {!loading && error && (
                    <div className={styles.centerState}>
                        <p className={styles.errorText}>{error}</p>
                    </div>
                )}

                {!loading && !error && filterdJobs.length === 0 && (
                    <div className={styles.emptyState}>
                        <p className={styles.emptyTitle}>No jobs match your search</p>
                        <p className={styles.emptyText}>Try a different keyword or clear your filters.</p>
                    </div>
                )}

                {!loading && !error && filterdJobs.length > 0 && (
                    <div className={styles.jobGrid}>
                        {filterdJobs.map((job) => (
                            <JobCard key={job._id} {...job} />
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}

export default Home;
