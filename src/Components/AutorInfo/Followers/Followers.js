import React from 'react'



function Followers({ ico, follow }) {
    return (
        < >
            <div className='group_wrapper'>
                <img src={ico} alt='group_ico' />
                <span>{follow}</span>
            </div>
        </>
    )
}

export default Followers
