
import React, { useState } from 'react';


/*const defaultCart = {
  item: {}
};*/
export const Context = React.createContext();

export default function CartContext({ defaultCart= {}, children }) {
 
  const [cart, setCart] = useState(defaultCart);


  const addItem = (idArt, nomArt, cantidad) => {

    console.log(idArt, nomArt, cantidad);
    setCart([...cart, {idArt,nomArt,cantidad}])

};
  
  const removeItem = (id) => {
  
};

const clear = () => {
    setCart({})
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
