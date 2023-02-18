import React from 'react'
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import {  NavLink} from "react-router-dom"
const JobPosition = ({jobTitle , companyName , location , expiryDate }) => {
  let formLevel 
  if ( jobTitle == "Alternance Bac Takicademy" ) {
    formLevel = '/formAlternanceBac'
  }else if (jobTitle == "Alternance Licence Takicademy"){
    formLevel = '/formAlternanceLicence'
  }
  return (
    <div className='job-position-wrapper'>
        <div className="infos">
            <div className="title">{jobTitle}</div>
            <div className="other-infos">
                <span className='company'><BusinessCenterOutlinedIcon style={{fontSize:"19px"}}/>{companyName}</span>
                <span className='location'><RoomOutlinedIcon style={{fontSize:"19px"}}/>{location}</span>
            </div>
        </div>
        <div className="take-action">
            <div className="expiry-date"><TodayOutlinedIcon style={{fontSize:"20px"}}/>{expiryDate}</div>
            <NavLink to={formLevel}>
            <button className='apply-btn'>Apply Now</button>
            </NavLink>
            

        </div>



    </div>
  )
}

export default JobPosition