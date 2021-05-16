import React from 'react'

import Search from '../Serach/Search'
import Logo from './Logo'

function Header({inputRef }) {
    return (
        <>
            <Logo />
            <Search
                inputRef={inputRef}
 />
        </>
    )
}

export default Header
