import { createContext } from 'react';

interface CartContextType {
  totalItems: number;
  setTotalItems: (quantity: number) => void; // Ensure this is a function
}
//handleAddToCart: (quantity: number) => void;

export const CartContext = createContext({} as CartContextType);

// export const CartProvider = ({ children }) => {
//   const [totalItems, setTotalItems] = useState(0);
//   const [items, setItems] = useState([]);
//   const handleAddToCart = (quantity) => {
//     setTotalItems(totalItems + quantity);
//   };
//   const handleRemoveFromCart = (id) => {
//     setTotalItems(totalItems - 1);
//     setItems(items.filter((item) => item.id!== id));
//   };
//   return (
//     <CartContext.Provider value={{ totalItems, setTotalItems, items, setItems, handleAddToCart, handleRemoveFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );

// }
