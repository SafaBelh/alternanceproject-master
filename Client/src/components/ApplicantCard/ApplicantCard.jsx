import React from 'react'
import Avatar from "../../assets/icons/avatar.jpg"

const ApplicantCard = ({FullName ,Job ,Mobile ,  Email , Rate}) => {
   
  return (
    <div className='applicant-card-wrapper'>
        <div className="applicant-card-avatar">
            <img src={Avatar}/>
        </div>
        <div className="applicant-card-infos">
            <div className="applicant-details"><span>FullName :</span>{FullName}</div>
            <div className="applicant-details"><span>Job :</span>{Job}</div>
            <div className="applicant-details"><span>Mobile :</span>{Mobile}</div>
            <div className="applicant-details"><span>Email :</span>{Email}</div>
            <div className="applicant-details"><span>Rate :</span><span className='rates'>
            {Array(Rate)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
            </span>
</div>
        </div>

    </div>
  )
}

export default ApplicantCard