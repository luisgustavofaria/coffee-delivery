import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import {
  Aside,
  ContainerHeader,
  CounterCoffees,
  DivLocalization,
  DivShoppingCart,
} from './styles';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../../Hooks/useCart';
import { useContext } from 'react';

export function Header() {
  const { totalItems } = useContext(CartContext);

  return (
    <ContainerHeader>
      <NavLink to={'/'}>
        <img src="/images/logo.svg" alt="logo" />
      </NavLink>
      <Aside>
        <DivLocalization>
          <MapPin size={22} color="#8047F8" weight="duotone" />
          <span>Porto Alegre, RS</span>
        </DivLocalization>
        <NavLink to="/checkout">
          <DivShoppingCart>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </DivShoppingCart>
        </NavLink>
        <CounterCoffees>
          <span>{totalItems}</span>
        </CounterCoffees>
      </Aside>
    </ContainerHeader>
  );
}
