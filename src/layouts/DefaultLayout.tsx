import { Outlet } from 'react-router-dom';
import { Container } from '../components/Container/styles';
import { Header } from '../components/Header';

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
