import React from 'react'
import empty from '../img/empty.svg'

function Empty() {
    return (
        <div>
            <img src={empty} alt='Repository list is empty' />
            <p>Repository list is empty</p>
        </div>
    )
}

export default Empty
