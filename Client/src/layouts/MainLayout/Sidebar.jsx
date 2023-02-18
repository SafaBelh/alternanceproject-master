import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useSelector, useDispatch } from "react-redux";
import { handleDropSubList } from "../../store/slices/recruitementSlice.js";

const Sidebar = () => {
  const { checkDropSubList } = useSelector((state) => state.recruitement);
  const dispatch = useDispatch();
  const dropSubList = () => {
    dispatch(
      handleDropSubList({
        checkDropSubList: !checkDropSubList,
      })
    );
  };
  return (
    <div className="sidebar">
      <ul className="sidebar_content_list">
        <NavLink to="/">
          <li>
            <div className="main-sidebar-item">
              <div className="item-icon">
                <HomeIcon style={{ fontSize: 30 }} />
              </div>
              <div className="sidebar_content_title">Dashboard</div>
            </div>
          </li>
        </NavLink>
        <NavLink to="/jobs">
          <li onClick={dropSubList}>
            <div className="main-sidebar-item">
              <div className="item-icon">
                <BusinessCenterIcon style={{ fontSize: 30 }} />
              </div>
              <div className="sidebar_content_title">Jobs</div>
            </div>
            <div className="item-icon">
              <ChevronRightIcon style={{ fontSize: 25, marginTop: 5 }} />
            </div>
          </li>
        </NavLink>

       
      </ul>
    </div>
  );
};

export default Sidebar;
