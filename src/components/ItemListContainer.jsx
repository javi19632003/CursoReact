import ItemList from "./ItemList";
import NavBar from './NavBar';
import ItemDetailContainer from './ItemDetailContainer';

export default function ItemListContainer({ titulo }) {
    return( 
    <>  
        <div className="enlinea">
            <img src='./latiendita.png' alt='' />
            <h1>{titulo}</h1> 
        </div>
        <div > 
        </div> 
        <ItemList />
        <ItemDetailContainer id = "3" />
    </>
    )
}

