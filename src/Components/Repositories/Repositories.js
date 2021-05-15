import React from 'react'
import Project from './Project'

function Repositories() {
    return (
        <div className='main_repositories'>
            <h1>Repositories (249)</h1>
            <Project  title = 'react-hot-loader' description='Tweak React components in real time. (Deprecated: use Fast Refresh instead.'/>
            <Project  title = 'overreacted.io' description='Personal blog by Dan Abramov.'/>
            <Project  title = 'whatthefuck.is' description='An opinionated glossary of computer science terms for front-end developers. Written by Dan Abramov.'/>
            <Project  title = 'react-deep-force-update' description='react-deep-force-update'/>
           
        </div>
    )
}

export default Repositories
