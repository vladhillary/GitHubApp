import React from 'react'

import Search from './Search'
import Logo from './Logo'

function Header({inputRef, backStartPage }) {
    return (
        <>
            <Logo 
            backStartPage={backStartPage}
             />
            <Search
                inputRef={inputRef}
 />
        </>
    )
}

export default Header
