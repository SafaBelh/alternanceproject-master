import React from "react";
import Logo from "../assets/icons/Header/headerLogo.png";
// import { IconButton } from "@material-ui/core";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
// import BusinessIcon from "@material-ui/icons/Business";
// import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
// import Cover from "../assets/icons/cover.jpg";
// import CompanyLogo from "../assets/icons/logo.jpg"
// import JobPosition from "../components/jobPosition/JobPosition";
// import Picture from "../assets/icons/image.webp"
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { NavLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const FormLicenceAlternance = () => {
  return (
    <body className="form-body">
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
            <NavLink to="/register">
              <button className="signUp-btn">Sign Up</button>
            </NavLink>
            <NavLink to="/login">
              <button className="login-btn">Log In</button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="job-title-company-name-wrapper">
        <div className="job-title">
          <label>Job Title :</label>
          <span>Alternance Bac </span>
        </div>
        <div className="company-name">
          <label>Company Name :</label>
          <span>TakiAcademy</span>
        </div>
      </div>
      <div className="container">
        <div className="form-title-wrapper">
          <BorderColorIcon style={{ marginTop: "5px" }} />
          <span className="form-title">Application Form</span>
        </div>

        <div className="form-description">
          * This form must be submitted with detailed and correct informations !
        </div>
        <div className="form-container">
          <form>
            {/* Start General Infos  */}
            <div className="form-title">Basic Informations</div>
            <div className="general-infos">
              <div className="full-name">
                <TextField
                  placeholder="First Name"
                  label="First Name"
                  multiline
                  variant="outlined"
                  margin="dense"
                  style={{ width: "390px" }}
                />
                <TextField
                  placeholder="Last Name"
                  label="Last Name"
                  multiline
                  variant="outlined"
                  margin="dense"
                  style={{ width: "390px" }}
                />
              </div>
              <div className="email-number">
                <TextField
                  placeholder="Email"
                  label="Email"
                  multiline
                  variant="outlined"
                  margin="dense"
                  type="Email"
                  style={{ width: "390px" }}
                />
                <div className="phone-number-wrapper">
                  <select className="select-phone-number">
                    <option>+216</option>
                  </select>
                  <TextField
                    placeholder="Phone Number"
                    label="Phone Number"
                    multiline
                    variant="outlined"
                    margin="dense"
                    type="Number"
                    style={{ width: "320px" }}
                  />
                </div>
              </div>
              <div className="degree-infos-wrapper">
                <TextField
                  placeholder="Degree"
                  label="Degree"
                  multiline
                  variant="outlined"
                  margin="dense"
                  style={{ width: "390px" }}
                />
                <TextField
                  placeholder="University"
                  label="University"
                  multiline
                  variant="outlined"
                  margin="dense"
                  style={{ width: "390px" }}
                />
              </div>

              {/* Upload Zone */}
              <div className="upload-area-wrapper">
                <div className="left">
                  <div className="title">Upload Your Profile Picture </div>
                  <div className="description">
                    * You can Upload JGP , PNG , JPEG
                  </div>
                  <div className="description">
                    * Minimum Size 220*220 And Maximum Size 250*250
                  </div>
                  <div className="upload-input">
                    <input type="file" />
                  </div>
                </div>
                <div className="right">
                  <div className="preview-avatar-upload"></div>
                </div>
              </div>
            </div>
            {/* End General Infos  */}

            {/* Start Bachelor's Infos */}
            {/* <div className="form-title">Bachelor's Informations : </div>
            <div className="bachelor-infos-wrapper">
              <div className="bachelor">
                <label>Bachelor : </label>
                <select>
                  {/* <option value="">Select Your Bachelor Degree </option> */}
            {/* <option value="Mathématique">Mathématique</option>
                  <option value="Science">Science</option>
                  <option value="Technique">Technique</option>
                  <option value="Informatique">Informatique</option>
                </select>
              </div>
              <div className="bachelor-marks">
                <div className="subject">
                  <label>💻 Computer Science :</label>
                  <input type="Number" />
                </div>
                <div className="subject">
                  <label>📐 Mathematics :</label>
                  <input type="Number" />
                </div>
                <div className="subject">
                  <label>🗽 English : </label>
                  <input type="Number" />
                </div>
              </div> */}
            {/* Upload Zone */}
            {/* </div>
            <div className="upload-area-wrapper">
              <div className="left">
                <div className="title">
                  Upload Your Bachelor's Grades Transcript
                </div>
                <div className="description">
                  * You can Upload JGP , PNG , JPEG
                </div>

                <div className="upload-input">
                  <input type="file" />
                </div>
                <button className="upload-button">Upload</button>
              </div>
              <div className="right">
                <div className="preview-avatar-upload"></div>
                {/* <div className="preview-file-upload">FILE.PDF</div> */}
            {/* </div>
            </div>  */}
            {/* End Bachelor's Infos */}
            {/* Start Resume  */}
            <div className="resume-title">Resume Informations :</div>
            <div className="upload-area-wrapper">
              <div className="left">
                <div className="title">Upload Your Resume - CV</div>
                <div className="description">* You can Upload PDF</div>

                <div className="upload-input">
                  <input type="file" />
                </div>
                <button className="upload-button">Upload</button>
              </div>
              <div className="right">
                <div className="preview-avatar-upload"></div>
                {/* <div className="preview-file-upload">FILE.PDF</div> */}
              </div>
            </div>
            {/* End Resume  */}
            {/* Start Motivational Letter  */}
            <div className="resume-title">Motivational Letter :</div>
            <div className="upload-area-wrapper">
              <div className="left">
                <div className="title">Upload Your Motivational Letter</div>
                <div className="description">* You can Upload PDF , DOC</div>

                <div className="upload-input">
                  <input type="file" />
                </div>
              </div>
              <div className="right-files">
                <div className="preview-file-upload">FILE.PDF</div>
                <button className="upload-button">Upload</button>
              </div>
            </div>
            {/* End Motivational Letter  */}
            <div className="submit-btn-wrapper">
              <button className="submit-form-btn">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer"></div>
    </body>
  );
};

export default FormLicenceAlternance;

// export default FormLicenceAlternance
