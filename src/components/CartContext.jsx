
import React, { useState } from 'react';

export const Context = React.createContext();

const defaultCart = {
  item: {},
  cantidad: 0
};

export default function CartContext({ children }) {
  const [cart, setCart] = useState(defaultCart);


  const addItem = (item, cantidad) => {
  
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
