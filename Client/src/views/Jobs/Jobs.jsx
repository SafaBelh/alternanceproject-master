import React from 'react'
import { NavLink } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';


const Jobs = () => {
  return (
    <div className='jobs-container'>
      {/* Navbar */}
      <ul  className='jobs-navbar'>
        <NavLink to = "#"><li>Published Jobs</li></NavLink>
        <NavLink to = "#"><li>Draft Jobs</li></NavLink>
        <NavLink to = "#"><li>Archived Jobs</li></NavLink>
      </ul>
      {/* Search & Add Job Button */}
      <div className="search-add-btn-wrapper">
        <div className="search"> 
        <input type = "text" placeholder='Search... ' className='search-job-input'/>
        <SearchIcon style ={{position : 'absolute' , fontSize : "30px" , right:" 8px",top:"2px", color: "#6e6e6e" }} />
        </div>
        <button className = "add-job-btn">+ Add New Job</button>
       
      </div>
      {/* Jobs Table ( Job title - Condidates - Expiry Date - Status*/}
      <table>
        <tr>
          <th>Job Title</th>
          <th>Condidates</th>
          <th>Expiry Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr>
          <td className='job-title'><NavLink to = "/alternanceBacStaticsPage">Alternance Bac</NavLink></td>
          <td className='condidates'>0</td>
          <td>12/08/2022</td>
          <td className='job-status'><span>Active</span></td>
          <td><SettingsIcon style = {{color: "#7D838A" , cursor : "pointer"}}/></td>
        </tr>
        <tr>
          <td className='job-title'><NavLink to = "/alternanceLicenceStaticsPage">Alternance Licence</NavLink></td>
          <td className='condidates'>0</td>
          <td>12/08/2022</td>
          <td className='job-status'><span>Active</span></td>
          <td><SettingsIcon style = {{color: "#7D838A" , cursor : "pointer"}}/></td>
        </tr>
      </table>
  
  
  

    </div>
  )
}

export default Jobs