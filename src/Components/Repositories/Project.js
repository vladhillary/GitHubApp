import React from 'react'

function Project({ title, description }) {
    return (
        <div className='project_wrapper'>
            <a href='#' target='_blank' className='project_title'>{title}</a>
            <p className='project_description'>{description}</p>

        </div>
    )
}

export default Project
