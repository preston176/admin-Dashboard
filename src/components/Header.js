import React from 'react'
import './Header.css'
import Main from './Main'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Header() {
  return (
    <div className='heading'>
      <div className='heading-one'>
        <div className='heading-one-section'>
      
      <div className='search'>
      <SearchIcon />
    <div className='search-bar'><span><input type='text'></input></span></div>
  </div>
  </div>
  <div className='heading-one-section-child'>
  <NotificationsActiveIcon />
  <img className='avatar-icon-heading' src='https://prototypr-media.sfo2.digitaloceanspaces.com/wp-content/uploads/2021/06/avatar-150x150.png?w=128&q=75&format=auto&compress=true&dpr=2'></img>
  <p>Preston M</p>
  </div>
  </div>
        <div className='image-section'>


<img className='avatar-icon' src='https://prototypr-media.sfo2.digitaloceanspaces.com/wp-content/uploads/2021/06/avatar-150x150.png?w=128&q=75&format=auto&compress=true&dpr=2'></img>

</div>
<div>
    <p>Hi there,</p>
</div>
<div className='sections'>
  
    <div className='username-section'>
    <p>Preston M (@pres)</p>
    </div>

    <div className='buttons-section'>
        <button>New</button>
        <button>Upload</button>
        <button>Share</button>
    </div>
    
</div>
<Main />
    </div>
    
  )
}

export default Header