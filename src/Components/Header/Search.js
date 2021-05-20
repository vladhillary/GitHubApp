import React from 'react'
import lupa from '../img/search.svg'

function Search({ inputValue, onSubmit, onChange }) {



    return (
        <div className='search_wrapper'>
            <input
                value={inputValue}
                type='text'
                onChange={onChange}
                onKeyDown={onSubmit}
                placeholder='Enter GitHub username'
                name='loginUser' />
            <img src={lupa} alt='search icon' />
        </div>
    )
}

export default Search
