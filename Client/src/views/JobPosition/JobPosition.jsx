import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobPositionPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  let URL = " http://127.0.0.1:9000/api/v1/jobs/" + jobId;
  useEffect(() => {
    axios.get(URL).then((response) => {
      setJob(response.data.data);
    });
  }, []);
  return (
    <>
      {job && (
        <div className="job-position-wrapper">
          <div className="job-position-title">{job.jobTitle}</div>
        </div>
      )}
    </>
  );
};

export default JobPositionPage;
