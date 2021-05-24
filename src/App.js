import { useState } from 'react'
import AuthorInfo from './Components/AuthorInfo/AuthorInfo'
import './css/App.css';
import Header from './Components/Header/Header'
import Render from './Components/Render/Render'
import Repositories from './Components/Repositories/Repositories'
import search_bigger from './Components/img/search_bigger.svg'
import empty from './Components/img/empty.svg'
import not_found from './Components/img/not_found.svg'
import Loader from './Components/Render/Loader'



const amountRepos = 4


function App() {
  const [dataUser, setDataUser] = useState(null)
  const [reposData, setReposData] = useState([])
  const [notFound, setNotFound] = useState(false)
  const [currentPage, setCurrentPage] = useState(0);
  const [showLoader, setShowLoader] = useState(false)

  const [inputValue, setInputValue] = useState('')

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = async (e) => {

    if(e.target.value === '') return

    if (e.keyCode === 13) {
      setCurrentPage(0)
      setNotFound(false)
      const response = await fetch(`https://api.github.com/users/${inputValue}`)
      const parsedResp = await response.json()
      setDataUser(parsedResp)

      setShowLoader(true)

      await fetchData(0)

      setShowLoader(false)

      if (parsedResp.message === 'Not Found') setNotFound(true)

    }
  }

  const fetchData = async (page) => {

    const reposResponse = await fetch(`https://api.github.com/users/${inputValue}/repos?per_page=${amountRepos}&page=${page + 1}`)

    setReposData(await reposResponse.json())

  }

  const backStartPage = () => {
    setDataUser(null)
    setNotFound(false)
    setInputValue('')
    setCurrentPage(0)
    setReposData([])
  }

  const amountPages = Math.ceil(dataUser?.public_repos / amountRepos)

  async function handlePageClick({ selected }) {

    setCurrentPage(selected);
    setShowLoader(true)
    await fetchData(selected)
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

            <AuthorInfo
              dataUser={dataUser}
            />
            {showLoader ? <Loader />
              : reposData.length > 0 ?

                <Repositories
                  countRepos={dataUser.public_repos}
                  reposData={reposData}
                  currentPage={currentPage}
                  amountRepos={reposData.length}
                  amountPages={amountPages}
                  handlePageClick={handlePageClick}
                />
                :
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

    </div >
  );
}

export default App;
