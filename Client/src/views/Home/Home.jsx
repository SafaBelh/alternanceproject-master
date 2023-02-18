import React from 'react'
import JobStaticsCard from "../../components/jobStaticsCard/JobStaticsCard.jsx"
import ApplicantCard from "../../components/ApplicantCard/ApplicantCard.jsx"
const Home = () => {
  return (
    <div className='home-container'>
      {/* Start Jobs Statics Section */}
      <div className="jobs-statics-cards-wrapper">
      <JobStaticsCard color={"blue"}  number={0}  title ={"Published Jobs"}/>
      <JobStaticsCard color={"purple"}  number={0}  title ={"Draft Jobs"}/>
      <JobStaticsCard color={"yellow"}  number={0}  title ={"Archived Jobs"}/>
      <JobStaticsCard color={"green"}  number={0}  title ={"Team Members"}/>
      </div>
      {/* End Jobs Statics Section */}

      {/* Start Recent Applicants Section */}
      <div className="recent-applicants-section-container">
      <div className="recent-applicants-section-title">Recent Applicants</div>
      <div className="recent-applicants-wrapper">
        <ApplicantCard FullName={"Safa Belhouche"} Job={"Alternance BAC"} Mobile={50122080}   Email={"safabelhouch@gmail.com"}  Rate={4}/>
        <ApplicantCard FullName={"Safa Belhouche"} Job={"Alternance BAC"} Mobile={50122080}   Email={"safabelhouch@gmail.com"}  Rate={5}/>
      </div>
      
      </div>
    

      {/* End Recent Applicants Section */}




    </div>
  )
}

export default Home