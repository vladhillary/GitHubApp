import React from 'react'
import lupa from '../img/search.png'

function Search() {
    return (
        <div className='search_wrapper'>
            <input type='text' placeholder='Enter GitHub username'/>
            <img src={lupa} alt='search icon' />
        </div>
    )
}

export default Search
