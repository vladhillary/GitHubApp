import React from 'react'
import photo from '../img/photo.png'
import Followers from './Followers'
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
                    <a target='_blank' href='#'>gaearon</a>
                </div>
                <div className='follower_wrapper'>
                    <Followers ico={group_ico} follow='65.8k followers' />
                    <Followers ico={person_ico} follow='171 following' />
                </div>


            </div>
        </div>
    )
}

export default AutorInfo
