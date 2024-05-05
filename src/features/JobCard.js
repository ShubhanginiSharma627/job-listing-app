import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";
const JobCard = ({ job }) => {
    const theme = useTheme();
    const formatCurrency = (value, currency) => {
        return Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: currency,
        }).format(value);
    };
    return (
        <Card
            style={{
                borderRadius: 25,
                margin: theme.spacing(6),
                boxShadow: theme.shadows[3],
            }}
        >
            <CardContent>
                <Grid container spacing={2} alignItems="start">
                    <Grid item>
                        <Avatar
                            src={job.logoUrl}
                            alt={job.companyName}
                            style={{
                                width: theme.spacing(7),
                                height: theme.spacing(7),
                            }}
                        />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6" style={{ fontWeight: 500 }}>
                            {job.companyName}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            style={{
                                fontWeight: 500,
                            }}
                        >
                            {job.jobRole}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {job.location}
                            {job.maxExp
                                ? ` | ${job.minExp ? `${job.minExp}` : "0"} - ${
                                      job.maxExp
                                  } years`
                                : ""}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginTop: theme.spacing(1) }}
                >
                    Estimated Salary:{" "}
                    {job.minJdSalary &&
                        `${formatCurrency(
                            job.minJdSalary,
                            job.salaryCurrencyCode
                        )}`}{" "}
                    {job.minJdSalary && job.maxJdSalary ? "-" : ""}
                    {job.maxJdSalary &&
                        ` ${formatCurrency(
                            job.maxJdSalary,
                            job.salaryCurrencyCode
                        )}`}{" "}
                    LPA
                </Typography>
                <Typography
                    variant="subtitle1"
                    style={{ marginTop: theme.spacing(1), fontWeight: 500 }}
                >
                    About Company:
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{ margin: theme.spacing(1, 0), fontWeight: "bold" }}
                >
                    About us
                </Typography>
                <Box
                    sx={{
                        position: "relative",
                        height: 310, // Set a fixed height for the container
                        bgcolor: "background.paper", // Use theme's background color
                        overflow: "hidden", // Ensures nothing spills out
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            mt: 1, // margin-top from theme spacing
                            mx: 1, // horizontal margin
                            // Hide overflow text
                            textOverflow: "ellipsis", // Add ellipsis to overflow text
                            display: "-webkit-box",
                            WebkitLineClamp: 3, // Limit text to 3 lines
                            WebkitBoxOrient: "vertical",
                        }}
                    >
                        {job.jobDetailsFromCompany}
                        <Typography
                            variant="subtitle2"
                            sx={{
                                position: "absolute",
                                mt: 1,
                                fontWeight: "bold",
                            }}
                        >
                            Founder/Recruiter profiles:
                        </Typography>
                    </Typography>

                    <Button
                        variant="text"
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "100%",
                            bgcolor: "white",
                            opacity: 0.8,
                            color: "blue",
                            fontSize: "small",
                        }}
                    >
                        View More
                    </Button>
                </Box>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: theme.spacing(1),
                        marginBottom: theme.spacing(1),
                    }}
                ></div>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight={"bold"}
                >
                    Minimum Experience
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ margin: theme.spacing(1, 0) }}
                >
                    {job.minExp ? `${job.minExp} years` : "0 year"}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        width: "100%",
                        paddingTop: "0.1em",
                        paddingBottom: "0.1em",
                        backgroundColor: "rgb(85, 239, 196)",
                    }}
                    component="a" // Make the Button act as an anchor tag
                    href={job.jdLink} // Assuming `job.jdLink` contains the URL
                    target="_blank" // Optional: Opens the link in a new tab
                    rel="noopener noreferrer"
                >
                    <ElectricBoltIcon sx={{ color: "#FFD700" }} />{" "}
                    <p style={{ color: "black" }}>Easy Apply</p>
                </Button>
            </CardContent>
        </Card>
    );
};

export default JobCard;
