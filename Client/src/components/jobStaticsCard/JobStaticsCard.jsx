import React from 'react'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
const JobStaticsCard = ({color , number , title}) => {
    let iconColor = color
    if (color == "yellow") {iconColor = "#CF8D06"}
  return (
    <div  className='job-statics-card-wrapper'>
        <div className={`job-statics-card-icon-${color}`}>
            < BusinessCenterIcon style={{ color: iconColor }}/>
        </div>
        <div className="job-statics-card-infos">
            <div className="number-infos">{number}</div>
            <div className="title-infos">{title}</div>
        </div>
    </div>
  )
}

export default JobStaticsCard