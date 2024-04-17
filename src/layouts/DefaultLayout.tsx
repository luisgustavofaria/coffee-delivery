import { Outlet } from 'react-router-dom';
import { Container } from '../components/Container/styles';
import { Header } from '../components/Header';
import { CartProvider } from '../Hooks/useCart';

export function DefaultLayout() {
  return (
    <Container>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </Container>
  );
}
