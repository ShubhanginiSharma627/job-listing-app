import { Autocomplete, Box, Grid, TextField } from "@mui/material";
import React from "react";

const Filters = ({ jobs, onFilterChange }) => {
    // Create unique sets for the dropdowns
    const roles = [...new Set(jobs.map((job) => job.jobRole))];
    const locations = [...new Set(jobs.map((job) => job.location))];
    const techStacks = [
        "JavaScript",
        "Python",
        "Java",
        "C#",
        "Ruby",
        "Go",
        "TypeScript",
    ]; // Example tech stacks
    const minExperienceOptions = Array.from({ length: 11 }, (_, i) => i); // 0 to 10 years
    const minBasePayOptions = Array.from({ length: 8 }, (_, i) => i * 10); // 0 to 70 LPA by 10s

    return (
        <Box sx={{ flexGrow: 1, mx: 3, my: 2 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6} md={2}>
                    <Autocomplete
                        options={roles}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                hiddenLabel
                                placeholder="Roles"
                                variant="outlined"
                            />
                        )}
                        onChange={(event, newValue) =>
                            onFilterChange("role", newValue)
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Autocomplete
                        options={locations}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Locations"
                                variant="outlined"
                            />
                        )}
                        onChange={(event, newValue) =>
                            onFilterChange("location", newValue)
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Autocomplete
                        options={techStacks}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Tech Stack"
                                variant="outlined"
                            />
                        )}
                        onChange={(event, newValue) =>
                            onFilterChange("techStack", newValue)
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Autocomplete
                        options={minExperienceOptions}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Experience"
                                variant="outlined"
                            />
                        )}
                        onChange={(event, newValue) =>
                            onFilterChange("minExperience", newValue)
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Autocomplete
                        options={minBasePayOptions}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Min Base Pay"
                                variant="outlined"
                            />
                        )}
                        onChange={(event, newValue) =>
                            onFilterChange("minBasePay", newValue)
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <TextField
                        placeholder="Search Company Name"
                        variant="outlined"
                        fullWidth
                        onChange={(e) =>
                            onFilterChange("companyName", e.target.value)
                        }
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Filters;
