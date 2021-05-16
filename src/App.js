import { useRef, useEffect, useState } from 'react';
import AutorInfo from './Components/AutorInfo/AutorInfo';
import './Components/css/App.css';
import Header from './Components/Header/Header'
import Repositories from './Components/Repositories/Repositories';



function App() {
  const [dataUser, setDataUser] = useState()
  const [reposData, setReposData] = useState()
  
  const inputRef = useRef()

  useEffect(() => {

    fetchData()
    
  }, [])

  const fetchData=()=> {
    let input = inputRef.current
    input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        fetch(`https://api.github.com/users/${input.value}/repos`)
          .then((res) => res.json())
          .then((data) => {
            setReposData(data)
          });

        fetch(`https://api.github.com/users/${input.value}`)
          .then((res) => res.json())
          .then((data) => {
            setDataUser(data)
          });
      }
    })
  }

  return (
    <div className="App">
      <header className='header'>
        <Header
          inputRef={inputRef}

        />
      </header>
      <main className='main'>
        <AutorInfo 
        photo={dataUser ? dataUser.avatar_url : null}
        login={dataUser ? dataUser.login : null}
        html_url={dataUser ? dataUser.html_url : null}
        followers={dataUser ? dataUser.followers : null}
        following={dataUser ? dataUser.following : null}
        name={dataUser ? dataUser.name : null}
        />
        <Repositories 
        reposData={reposData ? reposData : null}
        />
      </main>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
