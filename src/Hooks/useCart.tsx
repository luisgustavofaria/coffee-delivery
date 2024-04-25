import { ReactNode, createContext } from 'react';
import { useState, useEffect } from 'react';
import { ICardCoffes } from '../pages/Home/CardCoffes';
import { AddressDetails } from '../pages/Checkout';

interface CartContextType {
  addToCart: (quantity: number) => void;
  addItemToCart: (item: ICardCoffes) => void;
  updateCartItemQuantity: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  addAddressToSuccess: (data: AddressDetails) => void;
  addPaymentToSuccess: (PaymentOptions: string) => void;
  totalItems: number;
  cartItems: ICardCoffes[];
  address: AddressDetails[];
  selectedPayment: string;
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [cartItems, setCartItems] = useState<ICardCoffes[]>([]);
  const [address, setAddress] = useState<AddressDetails[]>([]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  function addToCart(quantity: number): void {
    setTotalItems((prevTotalItems) => prevTotalItems + quantity);
  }

  function addItemToCart(item: ICardCoffes): void {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.coffee.id === item.coffee.id
    );

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.coffee.id === existingItem.coffee.id) {
          return {
            ...cartItem,
            coffee: {
              ...cartItem.coffee,
              quantity: cartItem.coffee.quantity + item.coffee.quantity,
            },
          };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  }

  function updateCartItemQuantity(itemId: string, quantity: number): void {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.coffee.id === itemId) {
        const newTotalItems =
          totalItems + (quantity - cartItem.coffee.quantity);
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
          return cartItem;
        }
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  }

  function removeItem(itemId: string) {
    const updatedCartItems = cartItems.filter(
      (item) => item.coffee.id !== itemId
    );
    setCartItems(updatedCartItems);

    const removedItem = cartItems.find((item) => item.coffee.id === itemId);
    if (removedItem) {
      setTotalItems(
        (prevTotalItems) => prevTotalItems - removedItem.coffee.quantity
      );
    }
  }

  function addAddressToSuccess(data: AddressDetails) {
    setAddress((prevAddress) => [...prevAddress, data]);
    setCartItems([]);
    setTotalItems(0);
  }

  const [selectedPayment, setSelectedPayment] = useState('');

  function addPaymentToSuccess(paymentOption: string) {
    setSelectedPayment(paymentOption);
    console.log(selectedPayment);
  }

  return (
    <CartContext.Provider
      value={{
        totalItems,
        addToCart,
        addItemToCart,
        cartItems,
        updateCartItemQuantity,
        removeItem,
        addAddressToSuccess,
        address,
        addPaymentToSuccess,
        selectedPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
