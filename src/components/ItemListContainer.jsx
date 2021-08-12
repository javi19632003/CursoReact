import ItemList from "./ItemList";



export default function ItemListContainer({ saludos }) {
    return( 
    <>       
        <h1>{saludos}</h1>  
        <ItemList />
    </>
    )
}

