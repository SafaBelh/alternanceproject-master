import React from 'react'
import {NavLink} from "react-router-dom"
import JobStaticsApplicantAlternanceBac from "../jobStaticsApplicantAlternanceBac/JobStaticsApplicantAlternanceBac.jsx"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const AlternanceBacStaticsPage = () => {
  return (
    <div className='job-statics-page-container'>

        <div className="job-title">Become A Team Member Of Alternance Bac TakiAcademy</div>
        <div className="job-date-menu">
            <div className="job-date">Date Started : <span>Monday 18th July 2022</span></div>
            <button className='job-menu-btn'>Job Menu <KeyboardArrowDownIcon /></button>
        </div>
        <div className="pipeline">
            <ul>
                
                <NavLink to = "#"><li>Applied<span> (0)</span></li></NavLink>
                <NavLink to = "#"><li>Active<span> (0)</span></li></NavLink>
                <NavLink to = "#"><li>First Validation<span> (0)</span></li></NavLink>
                <NavLink to = "#"><li>Second Validation<span> (0)</span></li></NavLink>
                <NavLink to = "#"><li>Accepted<span> (0)</span></li></NavLink>
                <NavLink to = "#"><li>Rejected<span> (0)</span></li></NavLink>
                
            </ul>
        </div>
        <div className="list-application">
            <JobStaticsApplicantAlternanceBac Name={"Safa Belhouche"} SubmissionDate={"2 days Ago"} Bachelor={"Mathématique"} City={"Sousse"} />
            <JobStaticsApplicantAlternanceBac Name={"Safa Belhouche"} SubmissionDate={"2 days Ago"} Bachelor={"Mathématique"} City={"Sousse"} />
            <JobStaticsApplicantAlternanceBac Name={"Safa Belhouche"} SubmissionDate={"2 days Ago"} Bachelor={"Mathématique"} City={"Sousse"} />


        </div>
    </div>
  )
}

export default AlternanceBacStaticsPage