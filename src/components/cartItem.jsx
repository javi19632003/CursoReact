
import React, { useContext } from 'react';
import { Context } from "../context/CartContext";

export default function CartItem ({id, desc, cant, preuni}) {

    const datoContexto = useContext(Context)
    
    const BorrarCart = (id) => {
        datoContexto.removeItem(id)
    }

    return(
        <>
            <div className='cartitem'>
                <p className='cartitem1'>{id}</p>
                <p className='cartitem1'>{cant}</p>
                <p className='cartitem2'>{desc}</p>
                <p className='cartitem1'>{preuni}</p>
                <button onClick={()=> BorrarCart(id)} >Borrar</button>

            </div>
        </>

    )
}