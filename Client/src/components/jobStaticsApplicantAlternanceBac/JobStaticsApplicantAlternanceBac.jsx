import React from "react";
import Avatar from "../../assets/icons/avatar.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/RoomOutlined";
import { NavLink } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useSelector, useDispatch } from "react-redux";
// import {handleDropDownMenu}

const JobStaticsApplicantAlternanceBac = ({
  Name,
  SubmissionDate,
  Bachelor,
  City,
}) => {
  const { dropMenu } = useSelector((state) => state.recruitement);
  const dispatch = useDispatch();
  //   const handleDropStateMenu = () => {
  //     console.log("drop menu")
  //     dispatch(handleDropDownMenu())

  //   }
  return (
    <NavLink to="/applicantPage">
      <div className="job-statics-applicant-wrapper">
        <div className="job-statics-applicant-infos">
          <input type="checkbox" className="checkbox" />

          <div className="job-statics-applicant-avatar">
            <img src={Avatar} />
          </div>
          <div className="applicant-infos">
            <div className="name">
              {Name}{" "}
              <span className="application-submission-date">
                {SubmissionDate}
              </span>
            </div>

            <div className="bachelor">Bac {Bachelor}</div>
            <div className="city">
              <RoomIcon style={{ color: "#7D838A", fontSize: "18px" }} />
              <span>{City}</span>
            </div>
          </div>
        </div>

        <div className="job-statics-applicant-actions">
          <div className="job-statics-applicant-actions-menu">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            <div className="dropMenu"></div>
          </div>

          <div className="rate">
            <StarBorderIcon
              style={{ color: "#767778", fontSize: "22px", cursor: "pointer" }}
            />
            <StarBorderIcon
              style={{ color: "#767778", fontSize: "22px", cursor: "pointer" }}
            />
            <StarBorderIcon
              style={{ color: "#767778", fontSize: "22px", cursor: "pointer" }}
            />
            <StarBorderIcon
              style={{ color: "#767778", fontSize: "22px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default JobStaticsApplicantAlternanceBac;
