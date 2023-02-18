import React from "react";
import Logo from "../../assets/icons/Header/headerLogo.png";

// import {IconButton } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import BusinessIcon from "@material-ui/icons/Business";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="logo-header-btn-wrapper">
          <div className="logo">
            <img className="logo-icon" src={Logo} />
            <div className="logo-text">Taki Academy.Jobs</div>
          </div>
          <NavLink to ="/companyPage">
          <button className="company-page-btn1">View Company Page</button>
          </NavLink>
         
        </div>

        <div className="notification-company-wrapper">
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <div className="company">
            <AssignmentIndIcon style={{ color: "#757575" }} />

            <div className="company-name">TakiAcademy</div>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
