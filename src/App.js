import { useState } from 'react'
import AutorInfo from './Components/AutorInfo/AutorInfo'
import './css/App.css';
import Header from './Components/Header/Header'
import Render from './Components/Render/Render'
import Repositories from './Components/Repositories/Repositories'
import search_bigger from './Components/img/search_bigger.svg'
import empty from './Components/img/empty.svg'
import not_found from './Components/img/not_found.svg'
import prev from './Components/img/arrow_prev.svg'
import next from './Components/img/arrow_next.svg'
import ReactPaginate from 'react-paginate'
import Loader from './Components/Render/Loader'


const amountRepos = 4


function App() {
  const [dataUser, setDataUser] = useState(null)
  const [reposData, setReposData] = useState([])
  const [notFound, setNotFound] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoader, setShowLoader] = useState(false)

  const [inputValue, setInputValue] = useState('')

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = async (e) => {
    if (e.keyCode === 13) {
      setCurrentPage(1)
      setNotFound(false)
      const response = await fetch(`https://api.github.com/users/${inputValue}`)
      const parsedResp = await response.json()
      setDataUser(parsedResp)

      await fetchData()


      if (parsedResp.message === 'Not Found') setNotFound(true)

    }
  }

  const fetchData = async () => {
    const reposResponse = await fetch(`https://api.github.com/users/${inputValue}/repos?per_page=${amountRepos}&page=${currentPage}`)

    setReposData(await reposResponse.json())

  }

  const backStartPage = () => {
    setDataUser('')
    setNotFound(false)
    setInputValue('')
  }

  const amountPages = Math.ceil(dataUser?.public_repos / amountRepos)

  async function handlePageClick({ selected: selectedPage }) {

    setCurrentPage(selectedPage);
    setShowLoader(true)
    await fetchData()
    setShowLoader(false)
  }
  return (
    <div className="App">

      <Header
        inputValue={inputValue}
        backStartPage={backStartPage}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      <main className='main'>
        {notFound ? <Render
          img={not_found}
          text='User not found'
        />
          : <> {dataUser ? <>

            <AutorInfo
              dataUser={dataUser}
            />
            {showLoader ? <Loader />
              : reposData.length > 0 ?
                <Repositories
                  countRepos={dataUser.public_repos}
                  reposData={reposData} /> :
                <Render
                  text='Repository list is empty'
                  img={empty}

                />
            }

          </> : <Render
            text='Start with searching a GitHub user'
            img={search_bigger}
          />}
          </>
        }
      </main>
      <footer className='footer'>
        {dataUser &&
          <>

            <p className='amountPaginate'>
              {(currentPage - 1) * 4 + 1}-{((currentPage - 1) * 4 + 1) + amountRepos - 1} of {dataUser?.public_repos} items
            </p>
            <ReactPaginate
              previousLabel={<img src={prev} alt='previous page' />}
              nextLabel={<img src={next} alt='next page'
              />}
              pageCount={amountPages}
              onPageChange={handlePageClick}
            />
          </>}

      </footer>
    </div >
  );
}

export default App;
