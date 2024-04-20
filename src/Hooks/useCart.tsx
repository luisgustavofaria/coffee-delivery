import { ReactNode, createContext } from 'react';
import { useState } from 'react';
import { ICardCoffes } from '../pages/Home/CardCoffes';

interface CartContextType {
  addToCart: (quantity: number) => void; // Ensure this is a function
  addItemToCart: (item: ICardCoffes) => void;

  totalItems: number;
  cartItems: ICardCoffes[];
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [totalItems, setTotalItems] = useState(0);

  const [cartItems, setCartItems] = useState<ICardCoffes[]>([]);

  function addToCart(quantity: number): void {
    const newTotalItems = totalItems + quantity;
    setTotalItems(newTotalItems);
  }
  function addItemToCart(item: ICardCoffes): void {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.coffee.id === item.coffee.id
    );

    if (existingItemIndex !== -1) {
      // Se o item já estiver no carrinho, atualiza apenas a quantidade
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].coffee.quantity +=
        item.coffee.quantity;
      setCartItems(updatedCartItems);
    } else {
      // Caso contrário, adiciona o novo item ao carrinho
      const newCartItems = [...cartItems, item];
      setCartItems(newCartItems);
    }
  }

  return (
    <CartContext.Provider
      value={{
        totalItems,
        addToCart,
        addItemToCart,
        cartItems,
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
