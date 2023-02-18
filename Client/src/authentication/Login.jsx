import { TextField } from '@material-ui/core'
import React from 'react'
import {NavLink} from "react-router-dom"
import Background from "../assets/icons/shapes.png"
import WhiteLogo from "../assets/icons/whiteLogo.svg"
import PersonIcon from '@material-ui/icons/PersonOutlined';
import DraftsIcon from '@material-ui/icons/DraftsOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
const Login = () => {
  return (

   <body className='register-body'>

        <div className="auth-wrapper">
            <div className="left">
                <img src={WhiteLogo}/>
                <div className="auth-title">Become A Member Of TakiAcademy</div>
                <NavLink to ="/register">
                <button className='login-btn'>Sign Up</button>
                </NavLink>
               
            </div>
            
            <div className="right">
                <div className="title"> <BorderColorOutlinedIcon style={{fontSize:"25px" }} /><span>Sign In :</span> </div>
                <form >
                   
                    <div className="name-wrapper">
                        {/* First Name */}
                        <div className="input-wrapper">
                            <PersonIcon style={{fontSize:"30px" , color:"#7D838A"}}/>
                            <input type= "text" placeholder='First Name' className='input'  />
                        </div>
                        
                        {/* Last Name */}
                        <div className="input-wrapper">
                            <PersonIcon style={{fontSize:"30px" , color:"#7D838A"}}/>
                            <input type= "text"  placeholder='Last Name' className='input'/>
                        </div>
                    </div>
                   
                    {/* Email */}
                        <div className="input-wrapper">
                            < DraftsIcon style={{fontSize:"30px" , color:"#7D838A"}}/>
                            <input type= "email" placeholder='Email' className='input-email input'/>
                        </div>
                    {/* Password */}
                        <div className="input-wrapper">
                            <LockOutlinedIcon style={{fontSize:"30px" , color:"#7D838A"}}/>
                            <input type= "password" placeholder='Password' className='input'/>
                        </div>
                    


                    <button className='login-btn' type='submit'>LogIn</button>
                    
                </form>
            </div>
        </div>
   </body>
       
        


    
  )
}

export default Login