import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../API.config';
import { Dialog, CircularProgress } from '@mui/material';
import jobIcon from '../assets/images/briefcase-icon.svg';
import workingPeople from '../assets/images/working-people.jpg';

export default function JobPage() {
  const { jobId } = useParams();
  const [jobDesc, setJobDesc] = useState({
    salary: { high_value: "", low_value: "", value_period: "" },
  });
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    axios.get(API_URL + `jobs/${jobId}`).then((data) => {
      setJobDesc(data.data[0]);
      setShowLoading(false);
    });
  // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="backgroundjob">
        <img src={workingPeople} alt="" />
      </div>
      <div className="jobPage margin-x">
        <Dialog open={showLoading}>
          <div style={{ padding: "50px" }}>
            <CircularProgress size={70} color="success" />
          </div>
        </Dialog>
        <div className="jobPage-background"></div>
        <div className="jobPage-heading">
          <div className="jobPage-heading-logo">
            <img src={jobIcon} alt="" />
          </div>
          <div className="jobPage-heading-info">
            <h1>{jobDesc.heading}</h1>
            <p className="companyName">
              {jobDesc.company_name},{jobDesc.municipality_name}
            </p>

            <p className="publishDate">
              Published on: {new Date(jobDesc.date_posted).getDate()}.
              {new Date(jobDesc.date_posted).getMonth() + 1}.
              {new Date(jobDesc.date_posted).getFullYear()}{" "}
            </p>
            <p className="publishDate">
              Ends on: {new Date(jobDesc.date_ends).getDate()}.
              {new Date(jobDesc.date_ends).getMonth() + 1}.
              {new Date(jobDesc.date_ends).getFullYear()}{" "}
            </p>
          </div>
        </div>
        <div className="jobPage-desc">
          <h2>Job Description</h2>
          <p>{jobDesc.descr}</p>
          <h3>Salary</h3>
          <p className="salary">
            {jobDesc.salary.high_value === jobDesc.salary.low_value
              ? jobDesc.salary.high_value
              : jobDesc.salary.high_value + "-" + jobDesc.salary.low_value}€
            /{jobDesc.salary.value_period === "m" ? "Month" : "Hour"}
          </p>
        </div>
      </div>
    </div>
  );
}