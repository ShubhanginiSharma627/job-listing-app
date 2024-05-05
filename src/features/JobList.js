import { Grid } from "@mui/material";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import JobCard from "./JobCard";

const JobList = ({ jobs, fetchMoreJobs, hasMore }) => {
    return (
        <InfiniteScroll
            dataLength={jobs.length}
            next={fetchMoreJobs}
            hasMore={hasMore}
        >
            <Grid container spacing={2}>
                {jobs.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
                        <JobCard job={job} />
                    </Grid>
                ))}
            </Grid>
        </InfiniteScroll>
    );
};

export default JobList;
