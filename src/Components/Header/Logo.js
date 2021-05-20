import React from 'react'
import logo from '../img/logo.svg'

function Logo({backStartPage}) {
    return (
    <div className='logo' onClick={backStartPage}>
        <img src={logo} alt='logo github' />
    </div>
    )
}

export default Logo
