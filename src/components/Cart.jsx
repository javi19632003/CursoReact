import React, { useContext } from 'react';
import { Context } from "../context/CartContext";
import CartItem from "./cartItem";

export default function Cart (){
     
    const datoContexto = useContext(Context)

    return(
        <>
        {datoContexto.cart.map((cart)=>
            <CartItem key= {cart.idArt} id={cart.idArt} desc ={cart.nomArt} cant={cart.cantidad} preuni={cart.preuni} ></CartItem>)}
        </>
    )
} 