// Nuestra la vista completa de un Item acá ponerle el stock y el boton comprar.

import ItemCount from "./ItemCount";

export default function ItemDetail({desc, preuni, urlfoto, caract, stk}) {
    return( 
    <>  
        <div>
            <div className='impitem'>
            <img className='img-fluid' src= { urlfoto } alt=""></img>
            </div>
            <div> { desc } </div>
            <div> { preuni } </div>
            <div> { caract } </div>
            <div> { stk } </div>
            <ItemCount stock= {stk} inicial = {1} />
        </div>    
    </>
    )
}