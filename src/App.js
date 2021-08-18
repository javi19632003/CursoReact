import './App.css'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/'>
              <ItemListContainer titulo = 'Tienda de Camaras de Fotos' />
            </Route>
          </Switch>
        </div>   
      </BrowserRouter>
    </>
  );
}

export default App;
