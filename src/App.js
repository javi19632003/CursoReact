import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <div className='top'>
        <img className='imgnav' src='latiendita.png' alt=""></img>
        <div>
            <span className='marcanav' >La Tiendita AJN</span>
            <NavBar />
        </div>  
    </div>
    
    <ItemListContainer saludos='ItemListContainer' />
    <ItemCount stock= {5} inicial = {1} />
    
    </>
  );
}

export default App;
