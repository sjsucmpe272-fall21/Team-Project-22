import { React, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Stack, Paper, Button, FormControl, InputLabel, Input, FormHelperText, Box } from "@mui/material";
import Header from "./Header";
import axios from 'axios';

export default function CreateNewJob() {
    const [jobDetails, setJobDetails] = useState({});
    const userType = localStorage.getItem('userType');

    const setValues = (e) => {
        // console.log('e.target ', e.target.name, e.target.value);
        setJobDetails({
            ...jobDetails,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        console.log('in handlesubmit');
        const userName = localStorage.getItem('userName');
        axios.post('http://localhost:8001/api/createNewJob', {...jobDetails})
            .then(response => {
                window.location = "/recruiter"
                // console.log(response.data);
                // setJobDetails(...jobDetails);

                
            })
            .catch(err => {
                console.log('error ', err);
            })
    }

    return (
        <>
        <Header />
        <Box sx={{ flexGrow: 1 }} marginTop={3}>
        <Grid container xs={12} md={12} justifyContent="space-around" alignItems="center">
            <Grid item xs={12} md={4} spacing={2}>
                <FormControl>
                <Stack spacing={3}>
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        id="outlined-required"
                        label="Job Name"
                        value={jobDetails.jobName}
                        onChange={(e) => setValues(e)}
                        variant="outlined"
                        name="jobName"
                    />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        id="outlined-required"
                        label="Company"
                        value={jobDetails.company}
                        variant="outlined"
                        name="company"
                        onChange={(e) => setValues(e)}
                    />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        id="outlined-required"
                        label="Industries"
                        value={jobDetails.industries}
                        variant="outlined"
                        name="industries"
                        onChange={(e) => setValues(e)}
                    />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        id="outlined-required"
                        label="Job Type"
                        value={jobDetails.type}
                        variant="outlined"
                        name="type"
                        onChange={(e) => setValues(e)}
                    />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        id="outlined-required"
                        label="Description"
                        value={jobDetails.description}
                        variant="outlined"
                        name="description"
                        onChange={(e) => setValues(e)}
                    />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        id="outlined-required"
                        label="Seniority Level"
                        value={jobDetails.seniorityLevel}
                        variant="outlined"
                        name="seniorityLevel"
                        onChange={(e) => setValues(e)}
                    />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        id="outlined-required"
                        label="Date Posted"
                        value={jobDetails.datePosted}
                        variant="outlined"
                        name="datePosted"
                        type="date"
                        onChange={(e) => setValues(e)}
                    />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        id="phone"
                        label="Location"
                        value={jobDetails.location}
                        variant="outlined"
                        name="location"
                        onChange={(e) => setValues(e)}
                    />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        id="date"
                        label="Apply Link"
                        value={jobDetails.applyLink}
                        variant="outlined"
                        name="applyLink"
                        onChange={(e) => setValues(e)}
                    />
                    <Button variant="contained" size="large" color="primary" onClick={handleSubmit}>
                        Create
                    </Button>
                </Stack>
                </FormControl>
            </Grid>
        </Grid>
        </Box>
        </>
    );
}