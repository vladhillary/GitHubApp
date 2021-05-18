import { useRef, useEffect, useState } from 'react';
import AutorInfo from './Components/AutorInfo/AutorInfo';
import './css/App.css';
import Header from './Components/Header/Header'
import Render from './Components/Render/Render';
import Repositories from './Components/Repositories/Repositories';
import search_bigger from './Components/img/search_bigger.svg'
import empty from './Components/img/empty.svg'
import not_found from './Components/img/not_found.svg'




function App() {
  const [dataUser, setDataUser] = useState()
  const [reposData, setReposData] = useState([])
  const [notFound, setNotFound] = useState(false)

  const inputRef = useRef()

  const fetchData = (input) => {
    
    input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        setNotFound(false)
        fetch(`https://api.github.com/users/${input.value}`)
          .then((res) => res.json())
          .then((data) => {
            setDataUser(data)
            if (data.message === 'Not Found') setNotFound(true)
            console.log(data)
          }).catch(err => {
            console.log(err, 'oureqweqwe')
            setNotFound(true)
          })

        fetch(`https://api.github.com/users/${input.value}/repos`)
          .then((res) => res.json())
          .then((data) => {
            setReposData(data)
          }).catch(err => setNotFound(true))

      }
    })
  }

  useEffect(() => {
    
    let input = inputRef.current
    fetchData(input)

    return () => {
      input.removeEventListener('keydown', (e) => {
        if (e.keyCode === 13) {

          fetch(`https://api.github.com/users/${input.value}`)
            .then((res) => res.json())
            .then((data) => {
              setDataUser(data)
            }).catch(err => alert(err))

          fetch(`https://api.github.com/users/${input.value}/repos`)
            .then((res) => res.json())
            .then((data) => {
              setReposData(data)
              console.log(data)
            }).catch(err => setNotFound(true))
        }
      })
    }

  }, [])

  const backStartPage = () => {
    setDataUser('')
    setNotFound(false)
    inputRef.current.value = ''
  }

  return (
    <div className="App">
      <header className='header'>
        <Header
          inputRef={inputRef}
          backStartPage={backStartPage}
        />
      </header>
      <main className='main'>
        {notFound ? <Render
          img={not_found}
          text='User not found'
        />
          : <> {dataUser ? <>
            <AutorInfo
              photo={dataUser.avatar_url}
              login={dataUser.login}
              html_url={dataUser.html_url}
              followers={dataUser.followers}
              following={dataUser.following}
              name={dataUser.name}
            />
            {reposData.length > 0 ?
              <Repositories
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

      </footer>
    </div >
  );
}

export default App;
