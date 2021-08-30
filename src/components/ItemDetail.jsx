// Nuestra la vista completa de un Item acá ponerle el stock y el boton comprar.

import ItemCount from "./ItemCount";
import React, { useContext, useState } from 'react';
import  { Link } from "react-router-dom"
import Cart from "./Cart";
import { Context } from "../context/CartContext";


export default function ItemDetail({desc, preuni, urlfoto, caract, stk}) {
   
   const [agregoCant, setAgregoCant] = useState(0)
   const [ItemCountVisible, setItemCountVisible] = useState(true)
   const [FinalCompra, setFinalCompra] = useState(false)
   const [irCart, setIrCart] = useState(false)

   const datoContexto = useContext(Context)
   
   
   const agregar = (cantArti) => {

        setAgregoCant(cantArti)
        setItemCountVisible(false)
        setFinalCompra(true)   
        console.log(datoContexto)
        
   } 

   const iraCart = () => {
       setIrCart(true)
       setFinalCompra(false)    
    }

    return( 
    <>  
        <div>
            <div className='impitem'>
            <img className='img-fluid' src= { '.'+urlfoto } alt=""></img>
            </div>
            <div> { desc } </div>
            <div> { preuni } </div>
            <div> { caract } </div>
            <div> { stk } </div>
            {ItemCountVisible && 
                 <ItemCount stock= {stk} inicial = {1} onAdd={agregar} />
            }
            {FinalCompra && 
                 <button onClick={()=> iraCart()} className="btn btn-warning">Finalizar Compra</button>
            }
            {irCart && 
                <Link to='/cart'>
                    <Cart  />                    
                </Link>

            }

        </div>    
    </>
    )
}