import React from "react";
import Logo from "../assets/icons/Header/headerLogo.png";
import { IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import BusinessIcon from "@material-ui/icons/Business";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Cover from "../assets/icons/cover.jpg";
import CompanyLogo from "../assets/icons/logo.jpg"
import JobPosition from "../components/jobPosition/JobPosition";
import Picture from "../assets/icons/image.webp"
import { NavLink } from "react-router-dom";
const CompanyPage = () => {
  return (
    <body className="company-page-body">
      {/* <div className="company-page"> */}
      <div className="header">
        <div className="header_container">
        <div className="logo-header-btn-wrapper">
          <div className="logo">
            <img className="logo-icon" src={Logo} />
            <div className="logo-text">Taki Academy.Jobs</div>
          </div>
          
        </div>

        <div className="user">
          
          
            {/* <AssignmentIndIcon style={{ color: "#757575" }} />

            <div className="company-name">TakiAcademy</div>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton> */}
            <NavLink to ="/register">
            <button className="signUp-btn">Sign Up</button>
            </NavLink>
            <NavLink to ="/login">
            <button className="login-btn">Log In</button>
            </NavLink>
            
          
        </div>
        </div>
      </div>
      <div className="company-page-container">
          <div className="cover">
            {/* <img src={Cover}/> */}
          </div>
          <div className="comany-name-logo-wrapper">
        <div className="company-logo-wrapper">
          <img src={CompanyLogo}/>
        </div>
        <div className="name">TakiAcademy</div>
         
        
          </div>

          <div className="jobs-section">
            <div className="open-jobs-title">
                Open Job Positions
            </div>
            <JobPosition jobTitle={"Alternance Bac Takicademy"} companyName={"TakiAcademy"} location={"Sousse"} expiryDate={"30/08/2002"} />
            <JobPosition jobTitle={"Alternance Licence Takicademy"} companyName={"TakiAcademy"} location={"Sousse"} expiryDate={"30/08/2002"} />
          </div>

          <div className="life-at-company-title">
              Life At TakiAcademy
          </div>

          <div className="life-at-company">
           
            <div className="left">
              <img src={Picture}/>
            </div>
            <div className="right">
              <img src={Picture}/>
              <img src={Picture}/>
              <img src={Picture}/>
              <img src={Picture}/>
            </div>
          </div>
      </div>
      
      <div className="footer"></div>
      
    {/* </div> */}
    </body>
    
    
  )
}

export default CompanyPage



