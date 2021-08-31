
import React, { useState } from 'react';


const defaultCart = {
  id: '',
  nom:'',
  cant: 0
};
export const Context = React.createContext();

export default function CartContext({ value = defaultCart , children }) {
 
  const [cart, setCart] = useState(value);


  const addItem = (idArt, nomArt, cantidad) => {

    console.log(idArt, nomArt, cantidad);
    setCart({...cart,
      id: idArt,
      nom:nomArt,
      cant: cantidad})

};
  
  const removeItem = (id) => {
  
};

const clear = () => {
    setCart(defaultCart)
};

const isInCart = (id) => {
    
};


  return (
    <>
      <Context.Provider value={{ cart: cart, addItem: addItem, removeItem: removeItem, clear: clear, isInCart: isInCart }}>
        {children}
      </Context.Provider>
    </>
  );
}
