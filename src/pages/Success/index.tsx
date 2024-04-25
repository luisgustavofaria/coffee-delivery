import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import {
  ContainerSuccess,
  DeliveryInformationGroup,
  Information,
  InformationGroup,
} from './styled';
import { CartContext } from '../../Hooks/useCart';
import { useContext } from 'react';

export function Success() {
  const { address, selectedPayment } = useContext(CartContext);

  return (
    <ContainerSuccess>
      <span>Uhu! Pedido confirmado</span>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <DeliveryInformationGroup>
        <InformationGroup>
          <Information>
            <div>
              <MapPin
                size={16}
                style={{ backgroundColor: '#8047F8' }}
                color="white"
                weight="fill"
              />
            </div>
            {address.map((e, i) => (
              <div key={i}>
                <span>
                  Entrega em
                  <strong>{` ${e.rua}, ${e.numero}`}</strong>
                </span>
                <span>
                  {e.bairro} - {e.cidade}, {e.uf}
                </span>
              </div>
            ))}
          </Information>
          <Information>
            <div>
              <Timer
                size={16}
                style={{ backgroundColor: '#DBAC2C' }}
                color="white"
                weight="fill"
              />
            </div>
            <div>
              <span>Previsão de entrega </span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </Information>
          <Information>
            <div>
              <CurrencyDollar
                size={16}
                style={{ backgroundColor: '#C47F17' }}
                color="white"
              />
            </div>
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{selectedPayment}</strong>
              </span>
            </div>
          </Information>
        </InformationGroup>
        <img src="/images/delivery.svg" alt="" />
      </DeliveryInformationGroup>
    </ContainerSuccess>
  );
}
