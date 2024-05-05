import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../features/Filter"; // Ensure the file name matches
import JobList from "../features/JobList"; // Ensure the file name matches
import { fetchJobs, setFilterJob } from "../redux/jobSlice";

const LandingPage = () => {
    const dispatch = useDispatch();
    const { jobs, hasMore, status } = useSelector((state) => state.jobs);
    const [offset, setOffset] = useState(0);
    const [filters, setFilters] = useState({
        companyName: "",
        role: "",
        location: "",
        techStack: "",
        minExperience: null,
        minBasePay: null,
    });
    useEffect(() => {
        dispatch(fetchJobs({ limit: 10, offset: 0 }));
    }, [dispatch]);
    useEffect(() => {
        dispatch(fetchJobs({ limit: 10, offset }));
    }, [dispatch, offset]);

    useEffect(() => {
        dispatch(fetchJobs({ limit: 10, offset }));
    }, [dispatch, offset, filters]); // Includes filters in dependency array

    // Function to fetch more jobs when user scrolls or requests more data
    const fetchMoreJobs = () => {
        if (status !== "loading" && hasMore) {
            setOffset((prevOffset) => prevOffset + 10);
        }
    };

    // Function to handle filter changes
    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => {
            const newFilters = { ...prevFilters, [filterName]: value };
            dispatch(setFilterJob(newFilters));
            return newFilters;
        });
    };
    console.log("jobs", jobs);
    return (
        <div>
            <Filters jobs={jobs} onFilterChange={handleFilterChange} />
            <JobList
                jobs={jobs}
                fetchMoreJobs={fetchMoreJobs}
                hasMore={hasMore}
            />
        </div>
    );
};

export default LandingPage;
