import { createContext } from 'react';

interface CartContextType {
  totalItems: number;
  addToCart: (quantity: number) => void; // Ensure this is a function
}

export const CartContext = createContext({} as CartContextType);

//handleAddToCart: (quantity: number) => void;
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
