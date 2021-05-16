import React from 'react'
import Project from './Project'

function Repositories({ reposData }) {

    return (
        <div className='main_repositories'>
            <h1>Repositories ({reposData ? reposData.length : 0})</h1>


            {reposData ? reposData.map((element, index) => {

                return <Project
                    key={element + index}
                    title={element.name}
                    description={element.description}
                    url = {element.html_url}
                />
            }) : null}


        </div>
    )
}

export default Repositories
