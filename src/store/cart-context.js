import React, { useState } from "react";
import { ListGroupItem } from "react-bootstrap";

const CartContext = React.createContext({
  items: [],
  addItems: (item) => {},
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setCartIsopen] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const addItemHandler = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemHandler = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);

      return updatedItems;
    });
  };

  const cartDisplayHandler = () => {
    setCartIsopen(prevState => !prevState);
  }

  const setIsDataFetchedHandler = () => {
    setIsDataFetched(prev => !prev);
  }

  const logoutHandler = () => {setCartItems([])};

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addItems: addItemHandler,
        removeItem: removeItemHandler,
        cartIsOpen: cartIsOpen,
        setCartDisplay: cartDisplayHandler,
        isDataFetched: isDataFetched,
        setIsDataFetched: setIsDataFetchedHandler,
        logout: logoutHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
