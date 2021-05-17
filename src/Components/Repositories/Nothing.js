import React from 'react'
import not_found from '../img/not_found.svg'

function Nothing() {
    return (
        <div>
            <img src={not_found} alt='user not found' />
        </div>
    )
}

export default Nothing
