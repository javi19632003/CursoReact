
import Item from "./Item";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { todos, produxcate } from "../firebase/fire"

export default function ItemList({items}) {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { cate } = useParams()

 /* useEffect(() => {
    console.log('Esperamos que responda ....');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(mokArticu);
        reject({
          status: 404
        });
      }, 2000);
    }).then((data)=>{
      if(cate !== null && cate !== undefined ){
        
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
  },[cate]) */
  
  useEffect(() => {
      if(cate !== null && cate !== undefined ){
        const items = produxcate(cate);
        items.then((data) => {
          const itemaux = []
          data.forEach(item =>{
            itemaux.push({id: item.id, desc: item.data().desc, preuni: item.data().preuni, cate: item.data().cate, urlfoto: item.data().urlfoto, caract: item.data().caract });
          });
            setProductos(itemaux);
            setCargando(false);
           }) 
          } else {
            const items = todos();
            items.then((data) => {
              const itemaux = []
              data.forEach(item =>{
                itemaux.push({id: item.id, desc: item.data().desc, preuni: item.data().preuni, cate: item.data().cate, urlfoto: item.data().urlfoto, caract: item.data().caract });
              });
                setProductos(itemaux);
                setCargando(false);
               }) 
          }

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