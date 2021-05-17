import React from 'react'
import search_bigger from '../img/search_bigger.svg'

function Home() {
    return (
        <div className='home_wrapper'>
            <div className='home'>
                <img src={search_bigger} alt='search' />
                <p>Start with searching a GitHub user</p>
            </div>
        </div>
    )
}

export default Home
