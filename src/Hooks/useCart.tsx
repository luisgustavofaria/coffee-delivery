import { ReactNode, createContext } from 'react';
import { useState } from 'react';
import { ICardCoffes } from '../pages/Home/CardCoffes';

interface CartContextType {
  addToCart: (quantity: number) => void; // Ensure this is a function
  addItemToCart: (item: ICardCoffes) => void;

  totalItems: number;
  cartItems: ICardCoffes[];
  quantityItem: number;
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [quantityItem, setQuantityItem] = useState(0);
  const [cartItems, setCartItems] = useState<ICardCoffes[]>([]);

  function addToCart(quantity: number): void {
    const newTotalItems = totalItems + quantity;
    setTotalItems(newTotalItems);
    setQuantityItem(quantity);
  }
  function addItemToCart(item: ICardCoffes): void {
    const newCartItems = [...cartItems, item];
    console.log(newCartItems);

    setCartItems(newCartItems);
  }

  return (
    <CartContext.Provider
      value={{
        totalItems,
        addToCart,
        addItemToCart,
        cartItems,
        quantityItem,
      }}
    >
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
