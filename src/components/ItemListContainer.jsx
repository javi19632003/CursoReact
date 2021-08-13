import ItemList from "./ItemList";



export default function ItemListContainer({ saludos }) {
    return( 
    <>  
        <div className='col-md-8 well'> 
            <h1>{saludos}</h1> 
        </div> 
        <ItemList />
    </>
    )
}

