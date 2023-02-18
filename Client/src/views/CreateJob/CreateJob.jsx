import React, { useState, useEffect } from "react";
import axios from "axios";
const CreateJob = () => {
  const [data, setData] = useState(null);
  const [jobTitle, setJobTitle] = useState(null);

  const handleCreateNewJob = () => {
    axios
      .post("http://127.0.0.1:9000/api/v1/jobs/createJob", {
        jobTitle: jobTitle,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setJobTitle("");
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:9000/api/v1/jobs/").then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
  return (
    <form>
      <input
        type="text"
        placeholder="Enter Job Title"
        value={jobTitle}
        onChange={(e) => {
          setJobTitle(e.target.value);
        }}
      />
      <button onClick={handleCreateNewJob}>Create Job</button>
    </form>
  );
};

export default CreateJob;
