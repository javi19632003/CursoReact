
import react, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
const mokArticu = [
    {
      id: '1',
      desc: 'Cámara compacta full-frame Alpha 7C',
      preuni: 5230,
      urlfoto: './img/camara1.png',
      stk : 10,
      caract: 'La cámara compacta full-frame Alpha 7C es linda y bla bla bla bla' 
    },
    {
      id: '2',
      desc: 'Cámara full-frame a9 II con capacidad profesional - | ILCE-9M2/B E38',
      preuni: 100.50,
      urlfoto: './img/camara2.png',
      stk : 3,
      caract: 'La Cámara full-frame a9 II con capacidad profesional es el mejor amigo del  bla bla bla bla' 
    },
    {
      id: '3',
      desc: 'Cámara APS-C a6100 con enfoque automático rápido',
      preuni: 1523.15,
      urlfoto: './img/camara3.png',
      stk : 5,
      caract: 'La Cámara APS-C a6100 con enfoque automático rápido permite realizar bla bla bla bla' 
    },
    {
      id: '4',
      desc: 'Cámara a6400 + SELP18105G',
      preuni: 6000.00,
      urlfoto: './img/camara4.png',
      stk : 8,
      caract: 'La Cámara a6400  y su lente SELP18105G son el complemento ideal para bla bla bla bla' 
    },
    {
      id: '5',
      desc: 'a1 con una resolución y velocidad superiores',
      preuni: 3560.00,
      urlfoto: './img/camara5.png',
      stk : 5,
      caract: 'La cámara a1 es linda y bla bla bla bla' 
    },
    {
      id: '6',
      desc: 'Cámara RX100 III avanzada con sensor tipo 1.0',
      preuni: 4530,
      urlfoto: './img/camara6.png',
      stk : 1,
      caract: 'La Cámara RX100 III avanzada con sensor tipo 1.0 es linda y bla bla bla bla' 
    }
  
  ];

   // acá vamos a entrar cuando haga un click en un Item de Itenlist para seleccionar
  // y mostrarnos por medio de ItemDetail toda la información del producto. 

export default function ItemDetailContarner({id}) {

    //console.log(id);
  
    const [unProdu, setunProdu] = useState([]);
    
   

       const getItem = (id = null) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const item = mokArticu.find(item => item.id === id);
          if (item != null) resolve(item);
          reject({
            status: 404
          });
        }, 2000);
      });
    };

  useEffect(() => {  
    const mipromesa =  getItem(id);
    mipromesa.then(result => {
     // console.log(result);
      setunProdu(result)}).catch(err => console.log(err));
  },[id])
 
   return( 
    <>  
       <ItemDetail key= {unProdu.id} desc={unProdu.desc} preuni={unProdu.preuni} urlfoto={unProdu.urlfoto} caract={unProdu.caract} stk={unProdu.stk}> </ItemDetail>
    </>
    )
}