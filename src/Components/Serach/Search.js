import React from 'react'
import lupa from '../img/search.svg'

function Search({ inputRef }) {
    return (
        <div className='search_wrapper'>
            <input
                ref={inputRef}
                type='text'
                placeholder='Enter GitHub username'
                name='loginUser' />
            <img src={lupa} alt='search icon' />
        </div>
    )
}

export default Search
