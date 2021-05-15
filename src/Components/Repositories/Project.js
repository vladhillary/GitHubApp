import React from 'react'

function Project({ title, description }) {
    return (
        <div className='project_wrapper'>
            <h3 className='project_title'>{title}</h3>
            <p className='project_description'>{description}</p>

        </div>
    )
}

export default Project
