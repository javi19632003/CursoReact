
import Item from "./Item";
import react, { useState, useEffect } from "react";
import mokArticu from "../data/mokArticu";


export default function ItemList({items}) {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    console.log('Esperamos que responda ....');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(mokArticu);
        reject({
          status: 404
        });
      }, 2000);
    }).then((data)=>{
      setProductos(data)
      setCargando(false)
    }).catch((err)=>{
      console.log(err)
    });
  },[])
  
    return (
        <>
          {cargando ? <h2>Cargando los Productos ....</h2> :
           productos.map((producto)=>
            <Item key= {producto.id} desc={producto.desc} preuni={producto.preuni} urlfoto={producto.urlfoto}></Item>
        )}
        </>
    )
}