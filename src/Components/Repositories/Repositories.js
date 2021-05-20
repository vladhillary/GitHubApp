import React from 'react'
import Project from './Project'

function Repositories({ reposData, countRepos }) {

    return (
        <>
            <div className='main_repositories'>
                <h1>{`Repositories (${countRepos})`}</h1>


                {reposData.map((element, index) => {

                    return <Project
                        key={element + index}
                        title={element.name}
                        description={element.description}
                        url={element.html_url}
                    />
                })}


            </div>

        </>
    )
}

export default Repositories
