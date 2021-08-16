
import Item from "./Item";
import react, { useState, useEffect } from "react";

const mokArticu = [
  {
    id: '1',
    desc: 'Cámara compacta full-frame Alpha 7C',
    preuni: 5230,
    urlfoto: './img/camara1.png'
  },
  {
    id: '2',
    desc: 'Cámara full-frame a9 II ',
    preuni: 100.50,
    urlfoto: './img/camara2.png'
  },
  {
    id: '3',
    desc: 'Cámara APS-C a6100 ',
    preuni: 1523.15,
    urlfoto: './img/camara3.png'
  },
  {
    id: '4',
    desc: 'Cámara a6400 + SELP18105G',
    preuni: 6000.00,
    urlfoto: './img/camara4.png'
  },
  {
    id: '5',
    desc: 'Cámara a1',
    preuni: 3560.00,
    urlfoto: './img/camara5.png'
  },
  {
    id: '6',
    desc: 'Cámara RX100 III ',
    preuni: 4530,
    urlfoto: './img/camara6.png'
  }

];

export default function ItemList({items}) {

  const [productos, setProductos] = useState([]);

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
    }).catch((err)=>{
      console.log(err)
    });
  },[])
  
    return (
        <>
          {productos.map((producto)=>
            <Item key= {producto.id} desc={producto.desc} preuni={producto.preuni} urlfoto={producto.urlfoto}></Item>
        )}
        </>
    )
}