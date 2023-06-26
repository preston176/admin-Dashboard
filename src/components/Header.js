import React from 'react'
import './Header.css'

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
    </div>
  )
}

export default Header