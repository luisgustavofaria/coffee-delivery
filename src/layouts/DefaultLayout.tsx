import { Outlet } from 'react-router-dom';
import { Container } from '../components/Container/styles';
import { Header } from '../components/Header';
import { CartContext } from '../Hooks/useCart';
import { useState } from 'react';

export function DefaultLayout() {
  const [totalItems, setTotalItems] = useState(0);

  function addToCart(quantity: number): void {
    const newTotalItems = totalItems + quantity;
    setTotalItems(newTotalItems);
  }

  return (
    <Container>
      <CartContext.Provider value={{ totalItems, addToCart }}>
        <Header />
        <Outlet />
      </CartContext.Provider>
    </Container>
  );
}
