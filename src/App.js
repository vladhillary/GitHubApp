import { useRef, useEffect, useState } from 'react';
import AutorInfo from './Components/AutorInfo/AutorInfo';
import './css/App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import Repositories from './Components/Repositories/Repositories';
import Empty from './Components/Repositories/Empty';




function App() {
  const [dataUser, setDataUser] = useState()
  const [reposData, setReposData] = useState()

  const [notFound, setNotFound] = useState(false)


  const inputRef = useRef()

  const fetchData = () => {
    let input = inputRef.current
    input.addEventListener('keydown', (e) => {
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
          }).catch(err => setNotFound(true))

      }
    })
  }

  useEffect(() => {

    fetchData()

  }, [])



  const backStartPage = () => {
    setDataUser('')
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
        {dataUser ? <>
          <AutorInfo
            photo={dataUser.avatar_url}
            login={dataUser.login}
            html_url={dataUser.html_url}
            followers={dataUser.followers}
            following={dataUser.following}
            name={dataUser.name}
          />
          {notFound ? <Empty /> : <Repositories
            reposData={reposData}
          />}
        </> : <Home />}



      </main>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
