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


const amountRepos = 4

// (cuurentPage-1)* 4 +1- first
// first + amountRepos -1 - second


function App() {
  const [dataUser, setDataUser] = useState(null)
  const [reposData, setReposData] = useState([])
  const [notFound, setNotFound] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [test, setTest] = useState(false)

  const [inputValue, setInputValue] = useState('')

  const onChange = (e) => {
    setInputValue(e.target.value)
  }



  const onSubmit = async (e) => {
    if (e.keyCode === 13) {
      try {
        setNotFound(false)
        const response = await fetch(`https://api.github.com/users/${inputValue}`)
        const parsedResp = await response.json()
        setDataUser(parsedResp)

        await fetchData()
      }
      catch (e) {
        setNotFound(true)

      }
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
    setTest(true)
    await fetchData()
    setTest(false)
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
            {test && 'TESTESRESFSEFSEFS'}

            {reposData.length > 0 ?
              <Repositories
                countRepos={dataUser.public_repos}
                reposData={reposData} /> :
              <Render
                text='Repository list is empty'
                img={empty}
              />}

          </> : <Render
            text='Start with searching a GitHub user'
            img={search_bigger}
          />}
          </>
        }
      </main>
      <footer className='footer'>
        {dataUser &&
          <ReactPaginate
            previousLabel={<img src={prev} alt='previous page' />}
            nextLabel={<img src={next} alt='next page'
            />}
            pageCount={amountPages}
            onPageChange={handlePageClick}
          />}

      </footer>
    </div >
  );
}

export default App;
