import React from 'react'
import Followers from './Followers'
import person_ico from '../img/person_ico.svg'
import group_ico from '../img/group_ico.svg'


function AuthorInfo({ dataUser: { avatar_url, login, html_url, followers, following, name } }) {
    return (
        <div className='main_avatar'>
            <div className='avatar'>
                <img src={avatar_url} alt='author_photo' />
            </div>
            <div className='author_info'>
                <div className='author_profile'>
                    <h2>{name}</h2>
                    <a target='_blank'
                        rel="noreferrer noopener"
                        href={html_url}>{login}</a>
                </div>
                <div className='follower_wrapper'>
                    <Followers ico={group_ico} follow={followers + ' followers'} />
                    <Followers ico={person_ico} follow={following + ' following'} />
                </div>


            </div>
        </div>
    )
}

export default AuthorInfo
