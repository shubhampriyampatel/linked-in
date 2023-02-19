import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@mui/material'
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_profile">
            <img src="https://e0.pxfuel.com/wallpapers/835/535/desktop-wallpaper-template-pulse-html-5.jpg" alt=""/>

            <div className="profile_details">
                <Avatar/>
                <h4>Shubham Priyam Patel</h4>
                <p>Frontend Developer</p>
            </div>

            <div className="profile_stats">
                <span>Who viewed your profile</span>
                <span className="start_number">10</span>
            </div>
            <div className="profile_stats">
                <span>Connection<br/><b>Grow Your Network</b></span>
                <span className="start_number">100</span>
            </div>

        </div>

        <div className="sidebar_recent">
        <p>Recent</p>
        <p className="hash"><span>#</span>html</p>
        <p className="hash"><span>#</span>css</p>
        <p className="hash"><span>#</span>javaScript</p>
        <p className="hash"><span>#</span>reactJs</p>
        <p className="hash"><span>#</span>bootstrap</p>
        <p className="hash"><span>#</span>figma</p>
        </div>
      
    </div>
          
   



  )
}

export default Sidebar
