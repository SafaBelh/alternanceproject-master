import React from 'react'
import Avatar from "../../assets/icons/avatar.jpg"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from "@material-ui/core";
import RoomIcon from '@material-ui/icons/RoomOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {NavLink} from "react-router-dom"


const JobStaticsApplicantAlternanceLicence = ({Name , SubmissionDate ,Degree ,City  }) => {
  return (
    <NavLink to="/applicantPage">
        <div className='job-statics-applicant-wrapper'>
        <div className="job-statics-applicant-infos">
            
                <input type="checkbox" className='checkbox'/>
            
                <div className="job-statics-applicant-avatar">
                    <img  src={Avatar}/>
                </div>
                <div className="applicant-infos">
                    <div className="name">{Name} <span className='application-submission-date'>{SubmissionDate}</span></div>
                   
                    <div className="bachelor">Degree : {Degree}</div>
                    <div className="city"><RoomIcon style = {{color:"#7D838A" , fontSize:"18px"}}  /><span>{City}</span></div>
                </div>


            


        </div>

        <div className="job-statics-applicant-actions">
            <div className="job-statics-applicant-actions-menu">
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            
            <div className="rate">
                <StarBorderIcon style = {{color : "#767778" , fontSize : "22px" , cursor : "pointer"}}/>
                <StarBorderIcon style = {{color : "#767778" , fontSize : "22px" , cursor : "pointer"}}/>
                <StarBorderIcon style = {{color : "#767778" , fontSize : "22px" , cursor : "pointer"}}/>
                <StarBorderIcon style = {{color : "#767778" , fontSize : "22px" , cursor : "pointer"}}/>
            </div>
        </div>

        
        

    </div>
    </NavLink>
    
  )
}

export default JobStaticsApplicantAlternanceLicence