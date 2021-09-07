import React, { useContext } from 'react';
import { Context } from "../context/CartContext";
import CartItem from "./cartItem";
import  { Link } from "react-router-dom"
export default function Cart (){
     
    const { cart, cantCarrito, calculoTotal } = useContext(Context)

       
    return(
        <>
        <div><h2> Compras Realizadas </h2> </div>
        
        {cantCarrito === 0 ? 
        <Link to='/'><div><h1>Carrito sin Productos</h1> 
         <button>ir a comprar</button></div> </Link> :
        cart.map((cart)=>
            <CartItem key= {cart.idArt} id={cart.idArt} desc ={cart.nomArt} cant={cart.cantidad} preuni={cart.preuni} ></CartItem>)}

        {cantCarrito !== 0 && <div><h3> Total de la compra: {calculoTotal()}  </h3> </div>}
        
        </>
    )
} 