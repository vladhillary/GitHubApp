import React from 'react'

function Project({ title, description, url }) {
    return (
        <div className='project_wrapper'>
            <a href={url}
                rel="noreferrer noopener"
                target='_blank'
                className='project_title'>{title}</a>
            <p className='project_description'>{description}</p>

        </div>
    )
}

export default Project
