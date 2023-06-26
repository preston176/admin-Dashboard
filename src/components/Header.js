import React from 'react'
import './Header.css'
import Main from './Main'

function Header() {
  return (
    <div className='heading'>
        <div className='image-section'>


<img src='#'></img>
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