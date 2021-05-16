import React from 'react'
import photo from '../img/photo.png'
import Followers from './Followers'
import person_ico from '../img/person_ico.png'
import group_ico from '../img/group_ico.png'


function AutorInfo({ photo, login, html_url, followers, following, name }) {
    return (
        <div className='main_avatar'>
            <div className='avatar'>
                <img src={photo} alt='autor_photo' />
            </div>
            <div className='autor_info'>
                <div className='autor_profile'>
                    <h2>{name}</h2>
                    <a target='_blank'
                        href={html_url}>{login}</a>
                </div>
                <div className='follower_wrapper'>
                    <Followers ico={group_ico} follow={followers + ' ' + 'followers'} />
                    <Followers ico={person_ico} follow={following + ' ' + 'following'} />
                </div>


            </div>
        </div>
    )
}

export default AutorInfo
