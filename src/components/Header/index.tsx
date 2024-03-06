import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Aside, ContainerHeader } from './styles';

export function Header() {
  return (
    <ContainerHeader>
      <img src="/images/logo.svg" alt="logo" />
      <Aside>
        <div>
          <MapPin size={22} color="#8047F8" weight="duotone" />
          <span>Porto Alegre, RS</span>
        </div>
        <div>
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </div>
      </Aside>
    </ContainerHeader>
  );
}
