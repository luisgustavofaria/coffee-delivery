import { ReactNode, createContext } from 'react';
import { useState } from 'react';

interface CartContextType {
  totalItems: number;
  addToCart: (quantity: number) => void; // Ensure this is a function
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [totalItems, setTotalItems] = useState(0);

  function addToCart(quantity: number): void {
    const newTotalItems = totalItems + quantity;
    setTotalItems(newTotalItems);
  }
  return (
    <CartContext.Provider value={{ totalItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

//handleAddToCart: (quantity: number) => void;
//   const [totalItems, setTotalItems] = useState(0);
//   const [items, setItems] = useState([]);
//   const handleAddToCart = (quantity) => {
//     setTotalItems(totalItems + quantity);
//   };
//   const handleRemoveFromCart = (id) => {
//     setTotalItems(totalItems - 1);
//     setItems(items.filter((item) => item.id!== id));
//   };
