import { ReactNode, createContext } from 'react';
import { useState, useEffect } from 'react';
import { ICardCoffes } from '../pages/Home/CardCoffes';

interface CartContextType {
  addToCart: (quantity: number) => void; // Ensure this is a function
  addItemToCart: (item: ICardCoffes) => void;
  updateCartItemQuantity: (itemId: string, quantity: number) => void;

  totalItems: number;
  cartItems: ICardCoffes[];
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [cartItems, setCartItems] = useState<ICardCoffes[]>([]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  function addToCart(quantity: number): void {
    const newTotalItems = totalItems + quantity;
    setTotalItems(newTotalItems);
  }
  function addItemToCart(item: ICardCoffes): void {
    // Verifica se o item já está no carrinho pelo ID
    const existingItem = cartItems.find(
      (cartItem) => cartItem.coffee.id === item.coffee.id
    );

    if (existingItem) {
      // Se o item já estiver no carrinho, atualiza apenas a quantidade
      const updatedCartItems = cartItems.map((cartItem) => {
        return {
          ...cartItem,
          coffee: {
            ...cartItem.coffee,
            quantity: cartItem.coffee.quantity + item.coffee.quantity,
          },
        };
      });

      setCartItems(updatedCartItems);
    } else {
      // Caso contrário, adiciona o novo item ao carrinho
      setCartItems([...cartItems, item]);
    }
  }

  function updateCartItemQuantity(itemId: string, quantity: number): void {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.coffee.id === itemId) {
        const oldQuantity = cartItem.coffee.quantity;
        const difference = quantity - oldQuantity;
        const newTotalItems = totalItems + difference;

        if (newTotalItems > 0) {
          setTotalItems(newTotalItems);
          return {
            ...cartItem,
            coffee: {
              ...cartItem.coffee,
              quantity: quantity,
            },
          };
        } else {
          // Se a quantidade total se tornar negativa, mantenha a quantidade do item anterior e não atualize totalItems
          return cartItem;
        }
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
  }

  return (
    <CartContext.Provider
      value={{
        totalItems,
        addToCart,
        addItemToCart,
        cartItems,
        updateCartItemQuantity,
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
