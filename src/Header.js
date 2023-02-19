import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar } from '@mui/material';

function Header() {
  return (
    <div className="header">
        <div className="header_left">
            <div className="header_logo">
            <img src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt=""/>
            </div>
            <div className="header_search">
                 <SearchIcon/>
                 <input type="text" placeholder="Search"/>
            </div>
        </div>

        <div className="header_right">
            <HeaderOptions Icon={HomeIcon} title="Home"/>
            <HeaderOptions Icon={PeopleAltIcon} title="My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOptions Icon={MessageIcon} title="Messaging"/>
            <HeaderOptions Icon={NotificationsActiveIcon} title="Notifications"/>
            <HeaderOptions avatar={Avatar} title="Shubham Priyam Patel"/>
            
        </div>
      
    </div>
  )
}

export default Header
