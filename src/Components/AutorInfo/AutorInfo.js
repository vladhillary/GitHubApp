import React from 'react'
import photo from '../img/photo.png'
import person_ico from '../img/person_ico.png'
import group_ico from '../img/group_ico.png'

function AutorInfo() {
    return (
        <div className='main_avatar'>
            <div className='avatar'>
                <img src={photo} alt='autor_photo' />
            </div>
            <div className='autor_info'>
                <div className='autor_profile'>
                    <h2>Dan Abramov</h2>
                    <a href='#'>gaearon</a>
                </div>

                <div className='follower_wrapper'>
                    <div className='group_wrapper'>
                        <img src={group_ico} alt='group_ico' />
                        <span>65.8k followers</span>
                    </div>
                    <div className='person_wrapper'>
                        <img src={person_ico} alt='person_ico' />
                        <span>171 following</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AutorInfo
