import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {NavLink} from "react-router-dom"
import RoomIcon from '@material-ui/icons/RoomOutlined';
import Avatar from "../../assets/icons/avatar.jpg"
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/Phone';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import DescriptionIcon from '@material-ui/icons/Description';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GetAppIcon from '@material-ui/icons/GetApp';
import PanoramaIcon from '@material-ui/icons/Panorama';
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg"
import Reddit from "../../assets/icons/reddit.png"
import Linkedin from "../../assets/icons/linkedin.svg"
import NoteCard from '../noteCard/NoteCard';



const ApplicantPage = () => {
  let Rate = 5 ;
  return (
   
    
    <div className='applicant-page-container'>
      {/* Back Button */}
      {/* <NavLink to = "#">
        <button className='back-btn'><ArrowBackIosIcon style={{fontSize : "18px" }}/>Back</button>
      </NavLink> */}
      <div className="applicant-infos">
        {/* Basic Infos Section */}
        <div className="first-section">
          <div className="avatar-name-status-city-infos-wrapper">
            <div className="avatar"><img src= {Avatar} /></div>
            <div className="name-status-city-infos-wrapper">
              <div className="name">Safa Belhouche</div>
              <div className="city">
                <RoomIcon style = {{color:"#7D838A" , fontSize:"22px"}}  />
                <span>Sousse</span>
              </div>

              <div className="status">Applied</div>
            </div>
          </div>

          <div className="general-infos-wrapper">
            {/* First Name */}
            <div className="one-detail">
              <CreateOutlinedIcon style={{ color : "#7D838A"}}/>
              <div className="label"> First Name :</div>
              <div className="detail">Safa</div>
            </div>
            

            {/* Last Name */}
            <div className="one-detail">
            <CreateOutlinedIcon style={{ color : "#7D838A"}}/>
            <div className="label">Last Name :</div>
            <div className="detail">Belhouche</div>
            </div>
            

            {/* Email*/}
            <div className="one-detail">
            <DraftsOutlinedIcon style={{ color : "#7D838A"}} />
            <div className="label">Email :</div>
            <div className="detail">safabelhouch@gmail.com</div>
            </div>
            

            {/* Phone Number*/}
            <div className="one-detail">
            <PhoneOutlinedIcon style={{ color : "#7D838A"}} />
            <div className="label">Phone Number :</div>
            <div className="detail">+216 50122080</div>
            </div>
           

            {/* Job */}
            <div className="one-detail">
            < BusinessCenterOutlinedIcon style={{ color : "#7D838A"}}/>
            <div className="label">Job :</div>
            <div className="detail">Alternance Bac TakiAcademy</div>
            </div>
            

            {/* Rate */}
            <div className="one-detail">
              <TrendingUpOutlinedIcon  style={{ color : "#7D838A"}} />
            <div className="label">Rate :</div>
            <div className="detail rate">{Array(Rate)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}</div>
            </div>
            

          </div>

          <button className='email-applicant-btn'>Email Safa Belhouche</button>
        </div>
        {/* Advanced Infos Section */}
        <div className="second-section">

          {/* Motivational Letter  */}
          <div className="advanced-detail-wrapper">
            <div className="detail-title">Motivational Letter</div>
            <div className="details">
            <div className="motivational-letter-file">
              <DescriptionIcon style={{ color : "#7D838A"}} />
              Safa-Belhouche-Motivational-Letter.doc
            </div>
            <button className='download-btn'>< GetAppIcon style={{ fontSize : "19px"}} /> Download</button>
            </div>
            
          </div>
          {/* Resume / CV  */}
          <div className="advanced-detail-wrapper">
            <div className="detail-title">Resume ( CV )</div>
            <div className="details">
            <div className="motivational-letter-file">
              <FileCopyIcon style={{ color : "#7D838A"}} />
              Safa-Belhouche-Resume.doc
            </div>
            <button className='download-btn'>< GetAppIcon style={{ fontSize : "19px"}}/>Download</button>
            </div>
          </div>
          {/* Bachelor / Degree Infos  */}
          <div className="advanced-detail-wrapper">
            <div className="detail-title">Bachelor Informations</div>
            <div className="bachelor-details">
            <div className="first-bachelor-detail">
            <div className="one-detail">
              <div className="label"> Bachelor :</div>
              <div className="detail">Mathématique</div>
            </div>
            <div className="one-detail">
              <div className="label"> Bachelor's Average :</div>
              <div className="detail">16.50</div>
            </div>
            </div>

            <div className="bachelor-marks">
            <div className="bachelor-marks-title">Bachelor's Marks : </div>
            <div className="bachelors-marks-wrapper">
            <div className="one-detail">
              <div className="label"> 🗽 English :</div>
              <div className="detail">18</div>
            </div>
            <div className="one-detail">
              <div className="label"> 📐 Mathématique :</div>
              <div className="detail">15</div>
            </div>
            <div className="one-detail">
              <div className="label"> 💻 Computer Science :</div>
              <div className="detail">16.5</div>
            </div>

            </div>
            </div>
            <div className="bachelor-grades-transcript-wrapper">
            <div className="bachelor-grades-transcript">
              <PanoramaIcon style={{ color : "#7D838A"}} />
              Safa-Belhouche-Bachelor-Grades-Transcript.png
            </div>
            <div className="download-btn-wrapper">
            <button className='download-btn'>< GetAppIcon style={{ fontSize : "19px"}}/>Download</button>
            </div>
            
           


            </div>



            </div>
            


            
          </div>
          {/* Social Media Accounts */}
          <div className="advanced-detail-wrapper">
            <div className="detail-title">Social Media Profiles </div>


            <div className="social-media-accounts-wrapper">
              <div className="social">
                <div className="social-media-icon"><img src={Linkedin}/></div>
                <NavLink to = 'https://linkedin/safaBelhouche'>
                <div className="social-media-link">https://linkedin/safaBelhouche</div>
                </NavLink>
                
              </div>
              <div className="social">
                
                <div className="social-media-icon"><img src={Facebook}/></div>
                <NavLink to = 'https://facebook/safaBelhouche'>
                <div className="social-media-link">https://facebook/safaBelhouche</div>
                </NavLink>
                
              </div>
             
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="third-section">
          <div className="add-note">
          <div className="notes-title">Notes</div>
          <textarea className="notes-text"></textarea>
          <div className="notes-btns">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn">Save</button>
            
            
          </div>
          </div>
          

          <div className="saved-notes-list">
          <NoteCard Name ={"Safa Belhouche"} Note={"Interesting Motivational Letter ..."} Admin={"Admin"} />
          <NoteCard Name ={"Safa Belhouche"} Note={"To Call For English Test ..."} Admin={"Admin"} />

          </div>

        </div>
      </div>
     
    
    </div>
  )
     
}

export default ApplicantPage