import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <div className='container'>
        <header className='page-header'>
        <div className='row col-md-2 well'>  
          <img className='img-fluid' src='latiendita.png' alt=""></img>        
          <div className='col-md-2 well flex' >
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2 well' >

          </div>
            <NavBar />
        </div>   
        </header>    
      </div>
    
    <ItemListContainer saludos='Camaras de Fotos' />
    
    
    </>
  );
}

export default App;
