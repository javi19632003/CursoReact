import './App.css'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>

          <div className="enlinea">
              <img src='./latiendita.png' alt='' />
              <h1>La Tiendita AJN</h1> 
          </div>
          <div className="enlinea"> 
              <NavBar />
          </div>

          <Switch>
            <Route path='/' exact>
              <ItemListContainer titulo = 'Camaras de Fotos' />
            </Route>
            <Route path='/cart' exact>
              <Cart  />
            </Route>
            <Route path='/:cate' exact>
              <ItemList />
            </Route>
            <Route path='/:cate/:id' exact>
              <ItemDetailContainer  />
            </Route>

          </Switch>
        </div>   
      </BrowserRouter>
    </>
  );
}

export default App;
