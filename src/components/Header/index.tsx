import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Aside, ContainerHeader } from './styles';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <ContainerHeader>
      <NavLink to={'/'}>
        <img src="/images/logo.svg" alt="logo" />
      </NavLink>
      <Aside>
        <div>
          <MapPin size={22} color="#8047F8" weight="duotone" />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink to="/checkout">
          <div>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </div>
        </NavLink>
      </Aside>
    </ContainerHeader>
  );
}
