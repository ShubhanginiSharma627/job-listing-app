// features/jobSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk(
    "jobs/fetchJobs",
    async ({ limit, offset }, { rejectWithValue }) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({ limit, offset });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body,
        };

        try {
            const response = await fetch(
                "https://api.weekday.technology/adhoc/getSampleJdJSON",
                requestOptions
            );
            const data = await response.json();

            return data.jdList;
        } catch (error) {
            return rejectWithValue(error.toString());
        }
    }
);

const jobSlice = createSlice({
    name: "jobs",
    initialState: {
        allJobs: [], // Stores all fetched jobs
        jobs: [], // Stores filtered jobs
        hasMore: true,
        status: "idle",
        error: null,
        limit: 10,
        filters: {
            // Filters stored in state
            companyName: "",
            role: "",
            location: "",
            techStack: "",
            minExperience: null,
            minBasePay: null,
        },
    },
    reducers: {
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setFilterJob: (state, action) => {
            state.filters = action.payload;
            state.jobs = state.allJobs.filter(
                (job) =>
                    (!state.filters.companyName ||
                        job.companyName
                            .toLowerCase()
                            .includes(
                                state.filters.companyName.toLowerCase()
                            )) &&
                    (!state.filters.role ||
                        job.jobRole === state.filters.role) &&
                    (!state.filters.location ||
                        job.location === state.filters.location) &&
                    (!state.filters.techStack ||
                        (job.techStack &&
                            job.techStack.includes(state.filters.techStack))) &&
                    (!state.filters.minExperience ||
                        job.minExp >= state.filters.minExperience) &&
                    (!state.filters.minBasePay ||
                        (job.minJdSalary !== null &&
                            job.minJdSalary >= state.filters.minBasePay))
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                const newJobs = action.payload;
                const existingIds = new Set(
                    state.allJobs.map((job) => job.jdUid)
                );
                const uniqueNewJobs = newJobs.filter(
                    (job) => !existingIds.has(job.jdUid)
                );

                state.allJobs = [...state.allJobs, ...uniqueNewJobs];
                state.jobs = applyFilters(state.allJobs, state.filters);
                state.hasMore = action.payload.length === 10; // Or dynamically determine based on the response
                state.status = "succeeded";
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});
function applyFilters(jobs, filters) {
    return jobs.filter(
        (job) =>
            (!filters.companyName ||
                job.companyName
                    .toLowerCase()
                    .includes(filters.companyName.toLowerCase())) &&
            (!filters.role || job.jobRole === filters.role) &&
            (!filters.location || job.location === filters.location) &&
            (!filters.techStack ||
                (job.techStack && job.techStack.includes(filters.techStack))) &&
            (!filters.minExperience || job.minExp >= filters.minExperience) &&
            (!filters.minBasePay ||
                (job.minJdSalary !== null &&
                    job.minJdSalary >= filters.minBasePay))
    );
}
export const { setFilterJob, setLimit } = jobSlice.actions;
export default jobSlice.reducer;
