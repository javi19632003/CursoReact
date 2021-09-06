
import  { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import mokArticu from "../data/mokArticu";
import { useParams } from "react-router-dom";
import { unProducto} from '../firebase/fire'

// acá vamos a entrar cuando haga un click en un Item de Itenlist para seleccionar
  // y mostrarnos por medio de ItemDetail toda la información del producto. 

export default function ItemDetailContarner() {

    const { id } = useParams() 
   
    const [unProdu, setunProdu] = useState([]);
    const [cargando, setCargando] = useState(true);
   

 /*      const getItem = (id = null) => {
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
        setunProdu(result)
        setCargando(false)
        }).catch(err => console.log(err));
    },[id, unProdu]) */
   


  useEffect(() => {  
      console.log(id)
      const items = unProducto(id);
      items.then((data) => {
        const itemaux = []
        data.forEach(item =>{
          itemaux.push({id: item.id, desc: item.data().desc, preuni: item.data().preuni, cate: item.data().cate, urlfoto: item.data().urlfoto, caract: item.data().caract });
        });
        setunProdu(itemaux);
        setCargando(false);
      });
  },[id, unProdu])
 
   return( 
    <>  
      {cargando ? <div>Cargando producto</div> :
       <ItemDetail key= {unProdu.id} desc={unProdu.desc} preuni={unProdu.preuni} urlfoto={unProdu.urlfoto} caract={unProdu.caract} stk={unProdu.stk} id={unProdu.id} >  </ItemDetail>
      }
    </>
    )
}