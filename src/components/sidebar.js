import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import BadgeIcon from '@mui/icons-material/Badge';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HistoryIcon from '@mui/icons-material/History';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
  return (
    <div className='sidebar-wrapper'>
        <div className='Head-section'>
            <img src='#'></img>
            <p>Dashboard</p>
            </div>

    <div className='sidebar-content'>
        <ul>
            <li><span><HomeIcon /></span>Home</li>
            <li><span><BadgeIcon /></span>Profile</li>
            <li><span><ChatBubbleIcon /></span>Messages</li>
            <li><span><HistoryIcon /></span>History</li>
            <li><span><BadgeIcon /></span>Tasks</li>
            <li><span><PeopleIcon /></span>Communities</li>
        </ul>
    </div>

    <div className='sidebar-content'>
        <ul>
            <li><span>SettingsIcon</span>Settings</li>
            <li>Support</li>
            <li>Privacy</li>
        </ul>
    </div>
        
        
    </div>
  )
}

export default Sidebar