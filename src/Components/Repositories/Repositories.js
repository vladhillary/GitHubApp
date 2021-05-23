import React from 'react'
import Project from './Project'
import ReactPaginate from 'react-paginate'
import prev from '../img/arrow_prev.svg'
import next from '../img/arrow_next.svg'

const getItemCount = (currentPage, amountRepos, countRepos) => `${currentPage * 4 + 1}-${(currentPage * 4 + 1) + amountRepos - 1} of ${countRepos} items`

function Repositories({ reposData, countRepos, currentPage, amountRepos, amountPages, handlePageClick }) {



    return (
        <div className='repos_wrapper'>
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
            <div className='pagination_wrapper'>
                <p className='amountPaginate'>

                    {getItemCount(currentPage, amountRepos, countRepos)}
                </p>

                <ReactPaginate
                    previousLabel={<img src={prev} alt='previous page' />}
                    nextLabel={<img src={next} alt='next page' />}
                    pageCount={amountPages}
                    onPageChange={handlePageClick}
                    forcePage={currentPage}
                />
            </div>


        </div>
    )
}

export default Repositories
