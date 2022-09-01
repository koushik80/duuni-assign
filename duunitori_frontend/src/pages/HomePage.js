import React, { useState, useEffect } from 'react';
import { Dialog, CircularProgress } from '@mui/material';
import JobData from '../components/JobData';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import { API_URL } from '../API.config';

//import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AllJobs from '../components/allData';

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoading, setShowLoading] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [latestEndingSort, setlatestEndingSort] = useState("default");
  const [currentAPIURL, setCurrentAPIURL] = useState(API_URL + "jobs");
  //const [searchQuery, setSearchQuery] = useState("");
  //const [allJobData, setAllJobData] = useState([]);
  //const [latestEnding, setlatestEnding] = useState("");

  useEffect(() => {
    setShowLoading(true);
    axios.get(currentAPIURL + `?pageNum=${currentPage}`).then((data) => {
      setJobData(data.data);
      setShowLoading(false);
    });
  }, [currentPage, currentAPIURL]);

  useEffect(() => {
    const tmp = latestEndingSort;
    if (tmp == "default") {
      setCurrentAPIURL(API_URL + "jobs");
    } else if (tmp == "asc") {
      setCurrentAPIURL(API_URL + "jobs/latestEnding/asc");
    } else if (tmp == "dsc") {
      setCurrentAPIURL(API_URL + "jobs/latestEnding/dsc");
    }
  }, [latestEndingSort]);

  return (
    <div className="homepage margin-x">
      <Dialog open={showLoading}>
        <div style={{ padding: "50px" }}>
          <CircularProgress size={70} color="success" />
        </div>
      </Dialog>

      <div className="homepage-search">
        <Autocomplete
          freeSolo
          getOptionLabel={(option) => option.heading}
          options={AllJobs}
          renderOption={(props, option) => (
            <Link key={option.id} to={`/job/${option.id}`}>
              <Box component="li" {...props}>
                {option.heading}
              </Box>
            </Link>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Jobs"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </div>
      <div className="homepage-sort">
        <FormControl>
          <p className="sortby">Sort by:</p>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={latestEndingSort}
            onChange={(e) => {
              setlatestEndingSort(e.target.value);
            }}
          >
            <MenuItem value={"default"}>Default</MenuItem>
            <MenuItem value={"asc"}>
              Job Application Ending Date(Ascending)
            </MenuItem>
            <MenuItem value={"dsc"}>
              Job Application Ending Date(Descending)
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <JobData jobData={jobData} />

      <div className="homepage-pagination">
        <Pagination
          size="large"
          count={40}
          shape="rounded"
          onChange={(e, value) => {
            setCurrentPage(value);
          }}
        />
      </div>
    </div>
  );
}