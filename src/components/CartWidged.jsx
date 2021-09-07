import React, { useContext} from 'react';
import { Context } from "../context/CartContext";
import CartUnidades from './CartUnidades';
import  { Link } from "react-router-dom"
export default function CartWidged() {
    
    const {cantCarrito} = useContext(Context) 
    
    return(
        <>
        <Link to='/cart'>
        <div className='col-md-2 well' >
            <img className='img-fluid' src='carrito.svg' alt=""></img>
            {cantCarrito !==  0 && 
              <CartUnidades unidades={cantCarrito} />
            } 
        </div>
        </Link>
        </>
    )
}