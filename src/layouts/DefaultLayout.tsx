import { Outlet } from 'react-router-dom';
import { Container } from '../components/Container/styles';
import { Header } from '../components/Header';
import { CartContext } from '../Hooks/useCart';
import { useState } from 'react';

export function DefaultLayout() {
  const [totalItems, setTotalItems] = useState(1);

  return (
    <Container>
      <CartContext.Provider value={{ totalItems, setTotalItems }}>
        <Header />
        <Outlet />
      </CartContext.Provider>
    </Container>
  );
}
