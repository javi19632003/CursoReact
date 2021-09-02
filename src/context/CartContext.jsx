
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
  const [hayCarrito, setHayCarrito] = useState(false);


  const addItem = (idArt, nomArt, cantidad, preuni) => {
    /*!isInCart(idArt)? setCart([...cart, {idArt, nomArt, cantidad}]): console.log("ya existe")*/
    
    if(!isInCart(idArt)){
      setCart([...cart, {idArt, nomArt, cantidad, preuni}]);
      setCantCarrito(cantCarrito + 1)
      HayItems(cantCarrito)
    } else {
      console.log("ya existe")
    }
    
    console.log(cart);
  };
  
  const removeItem = (idArt) => {
    const remove=cart.filter(item => item.idArt !==idArt)
    setCart(remove)
    setCantCarrito(cantCarrito - 1)
    HayItems(cantCarrito)
  };

const clear = () => {
    setCart([])
    setCantCarrito(0)
    HayItems(0)
  };


const isInCart = (id) => {

  const existe = cart.find(item => item.idArt ===id)

  if (existe === undefined){
    return false
  } else {
    return true
  }
};

const HayItems = (cant) => {
  if(cant === 0 ){
      setHayCarrito(false)
      console.log('hayCarrito= ',hayCarrito," "+cant )
  } else {
      setHayCarrito(true)
      console.log('hayCarrito= ',hayCarrito," "+cant  )
  }

}

  return (
    <>
      <Context.Provider value={{hayCarrito: hayCarrito, cantCarrito: cantCarrito, cart: cart, addItem: addItem, removeItem: removeItem, clear: clear, isInCart: isInCart }}>
        {children}
      </Context.Provider>
    </>
  );
}
