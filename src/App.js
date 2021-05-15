import AutorInfo from './Components/AutorInfo/AutorInfo';
import  './Components/css/App.css';
import Header from './Components/Header/Header'
import Repositories from './Components/Repositories/Repositories';



function App() {
  return (
    <div className="App">
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <AutorInfo />
        <Repositories />
        
      </main>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
