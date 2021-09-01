
import React, { useState } from 'react';


/*const defaultCart = {
  id: '',
  nom:'',
  cant: 0
};*/

export const Context = React.createContext();

export default function CartContext({ value = [] , children }) {
 
  const [cart, setCart] = useState(value);


  const addItem = (idArt, nomArt, cantidad) => {
    !isInCart(idArt)? setCart([...cart, {idArt, nomArt, cantidad}]): console.log("ya existe")
    console.log(cart);
  };
  
  const removeItem = (idArt) => {
    const remove=cart.filter(item => item.idArt !==idArt)
    setCart(remove)
};

const clear = () => {
    setCart([])
};


const isInCart = (id) => {

  const existe = cart.find(item => item.idArt ===id)

  if (existe === undefined){
    return false
  } else {
    return true
  }
};

  return (
    <>
      <Context.Provider value={{ cart: cart, addItem: addItem, removeItem: removeItem, clear: clear, isInCart: isInCart }}>
        {children}
      </Context.Provider>
    </>
  );
}
