import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-wrapper'>
        <div className='Head-section'>
            <img src='#'></img>
            <p>Dashboard</p>
            </div>

    <div className='sidebar-content'>
        <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Messages</li>
            <li>History</li>
            <li>Tasks</li>
            <li>Communities</li>
        </ul>
    </div>

    <div className='sidebar-content'>
        <ul>
            <li>Settings</li>
            <li>Support</li>
            <li>Privacy</li>
        </ul>
    </div>
        
        
    </div>
  )
}

export default Sidebar