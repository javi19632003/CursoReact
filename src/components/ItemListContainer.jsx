import ItemList from "./ItemList";
import ItemDetailContainer from './ItemDetailContainer';
import { useParams,  Route } from "react-router";


export default function ItemListContainer({ titulo }) {
  
       const { cate, id } = useParams() 
       console.log(cate)
       console.log(id)
   
    return( 
    <>  
        <div > 
        </div> 
            <ItemList />
 
        <Route path='/:cate/:id' exact>
            <ItemDetailContainer />
        </Route>

    </>
    )
}

