import  { Link } from "react-router-dom"
import { Context } from "../context/CartContext";
import React, { useContext } from 'react';

export default function FinalizoCompra ({id}) {
  
    const { clear } = useContext(Context)
    console.log('id de finalizo ', id)
    return (
        <>
         <div>
            <h2>Gracias pos su compra</h2>
            <h3>Su Orden de Pedido es : {id} </h3>
            <h4>Esperamos vuelva pronto</h4>
            <Link to='/'> <button onClick={()=> clear()}>ir a comprar</button> </Link> 
         </div>
        </>

    )
}