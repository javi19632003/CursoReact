
import React, { useState } from 'react';


/*const defaultCart = {
  id: '',
  nom:'',
  cant: 0
};*/

export const Context = React.createContext();

export default function CartContext({ value = [] , children }) {
 
  const [cart, setCart] = useState(value);
  const [cantCarrito, setCantCarrito] = useState(0);


  const addItem = (idArt, nomArt, cantidad, preuni) => {
    /*!isInCart(idArt)? setCart([...cart, {idArt, nomArt, cantidad}]): console.log("ya existe")*/
    
    if(!isInCart(idArt)){
      setCart([...cart, {idArt, nomArt, cantidad, preuni}]);
      setCantCarrito(cantCarrito + 1)
    } else {
      console.log("ya existe")
    }
    
  };
  
  const removeItem = (idArt) => {
    const remove=cart.filter(item => item.idArt !==idArt)
    setCart(remove)
    setCantCarrito(cantCarrito - 1)
  };

const clear = () => {
    setCart([])
    setCantCarrito(0)
  };



const isInCart = (id) => {

  const existe = cart.find(item => item.idArt ===id)

  if (existe === undefined){
    return false
  } else {
    return true
  }
};

const calculoTotal = () => {
  let total = 0
   cart.forEach(element => { 
       total = total + element.cantidad * element.preuni
   });
   return total
};



  return (
    <>
      <Context.Provider value={{cantCarrito: cantCarrito, cart: cart, calculoTotal: calculoTotal, addItem: addItem, removeItem: removeItem, clear: clear, isInCart: isInCart }}>
        {children}
      </Context.Provider>
    </>
  );
}
