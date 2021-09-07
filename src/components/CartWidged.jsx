import React, { useContext} from 'react';
import { Context } from "../context/CartContext";
import CartUnidades from './CartUnidades';

export default function CartWidged() {

    const {cantCarrito} = useContext(Context) 
    
    return(
        <>
        <div className='col-md-1 well' >
            <img className='img-fluid' src='carrito.svg' alt=""></img>
            {cantCarrito !==  0 && 
              <CartUnidades unidades={cantCarrito} />
            } 
        </div>
        </>
    )
}