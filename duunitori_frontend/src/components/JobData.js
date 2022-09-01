import React from 'react';
import { Link } from 'react-router-dom';
import jobIcon from '../assets/images/briefcase-icon.svg';

export default function JobData({ jobData }) {
  return (
    <div className="homepage-jobdata">
      {jobData.map((job) => (
        <Link to={`job/${job.id}`} key={job.id}>
          <div className="homepage-jobdata-job">
            <div className="homepage-jobdata-job-logo">
              <img src={jobIcon} alt="" />
            </div>
            <div className="homepage-jobdata-job-info">
              <h2>{job.heading}</h2>
              <p>{job.company_name}</p>
              <p>{job.municipality_name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}