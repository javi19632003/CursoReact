import React, { useContext, useState } from 'react';
import { Context } from "../context/CartContext";
import CartItem from "./cartItem";
import  { Link } from "react-router-dom"
import { guardoOrden } from '../firebase/fire'
import FinalizoCompra from './FinalizoCompra';




export default function Cart (){

const { cart, cantCarrito, calculoTotal } = useContext(Context)
    const [idCompra, setidCompra ] = useState(" ");

    const hacerOrden = () => {
        const nuevaOrden = {
          buyer: {
            name: 'Alejandro Javier Nicolas',
            phone: '+54 9 9999-9999',
            email: 'javi19632003@gmail.com'
          },
          items: [],
          date: new Date().toString()
        };
        let totalOrden = 0;
        cart.forEach(item => {
          nuevaOrden.items.push(item);
          totalOrden = totalOrden + (item.cantidad * item.preuni);
        });
        nuevaOrden['totalOrden'] = totalOrden;

        console.log(nuevaOrden)
        guardoOrden("ordenes", nuevaOrden).then((data) => {
          console.log('data ', data)
          setidCompra(data)
        });
        
        

        /* const idNuevo = tomoId("ordenes");
        console.log ("idNuevo0: ",idNuevo)
       guardoId(idNuevo, nuevaOrden);        
        setidCompra(idNuevo);
        console.log ("idNuevo: ",idNuevo)
        console.log("Numero de Compra ",idCompra);*/
      };
      
      
    return(
        <>
        <div><h2> Compras Realizadas </h2> </div>
        
        {cantCarrito === 0 ? 
        <Link to='/'><div><h1>Carrito sin Productos</h1> 
         <button>ir a comprar</button></div> </Link> :
        cart.map((item)=>
            <CartItem key= {item.idArt} id={item.idArt} desc ={item.nomArt} cant={item.cantidad} preuni={item.preuni} ></CartItem>)}

        {cantCarrito !== 0 && <div><h3> Total de la compra: {calculoTotal()}  </h3> </div>}
        {cantCarrito !== 0 && idCompra === " " && <button onClick={hacerOrden}>Comprar</button>}
        { idCompra !== " " && <FinalizoCompra id={idCompra} />  }
        </>
    )
} 