import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CompanyLandingPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:9000/api/v1/jobs/").then((response) => {
      setData(response.data.data);
    });
  }, []);
  //   console.log(data);
  return (
    <>
      <div>Company Landing Page</div>
      <h3>Open Job Positions</h3>
      {data?.map((job) => (
        <NavLink to={`/${job._id}`} key={job._id}>
          <div className="single-job-wrapper" key={job._id}>
            <p className="single-job-title">{job.jobTitle}</p>
            <button className="single-job-apply-btn">Apply</button>
          </div>
        </NavLink>
      ))}
    </>
  );
};

export default CompanyLandingPage;
