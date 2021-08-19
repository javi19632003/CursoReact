import './App.css'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/' exact>
              <ItemListContainer titulo = 'Tienda de Camaras de Fotos' />
            </Route>
            <Route path='/:cate/:id' exact>
              <ItemListContainer titulo = 'Tienda de Camaras de Fotos' />
            </Route>
          </Switch>
        </div>   
      </BrowserRouter>
    </>
  );
}

export default App;
