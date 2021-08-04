import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <div className='top'>
        <img className='imgnav' src='latiendita.png' alt=""></img>
        <div>
            <span className='marcanav' >La Tiendita AJN</span>
            <NavBar />
            <ItemListContainer saludos='Holitas!!!' />
        </div>  
    </div>
    </>
  );
}

export default App;
