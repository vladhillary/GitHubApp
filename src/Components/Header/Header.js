import React from 'react'

import Search from './Search'
import Logo from './Logo'

function Header({ inputValue, backStartPage, onChange, onSubmit }) {
    return (
        <header className='header'>
            <Logo
                backStartPage={backStartPage}
            />
            <Search
                inputValue={inputValue}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </header>
    )
}

export default Header
