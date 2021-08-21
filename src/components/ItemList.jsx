
import Item from "./Item";
import { useState, useEffect } from "react";
import mokArticu from "../data/mokArticu";
import { useParams } from "react-router-dom";


export default function ItemList({items}) {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { cate } = useParams()

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
      if(cate != null){
        const filtro=data.filter((producto)=> producto.cate === cate)
        setProductos(filtro)
        setCargando(false)
      } else {
        setProductos(data)
        setCargando(false)
      }
    }).catch((err)=>{
      console.log(err)
    });
  },[cate])
  
    return (
        <>
          {cargando ? <h2>Cargando los Productos ....</h2> :
           productos.map((producto)=>
            <Item key= {producto.id} desc={producto.desc} preuni={producto.preuni} urlfoto={producto.urlfoto} cate={producto.cate} id={producto.id}></Item>
        )}
        </>
    )
}