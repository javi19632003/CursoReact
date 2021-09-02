import React, { useContext} from 'react';
import { Context } from "../context/CartContext";
import CartUnidades from './CartUnidades';

export default function CartWidged() {

    const {hayCarrito, cantCarrito} = useContext(Context) 
    
    console.log('hayCarrito widdged= ',hayCarrito )
    
   
    return(
        <>
        <div className='col-md-1 well' >
            <img className='img-fluid' src='carrito.svg' alt=""></img>
            {hayCarrito && 
              <CartUnidades unidades={cantCarrito} />
            } 
        </div>
        </>
    )
}