import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import {
  ContainerSuccess,
  DeliveryInformationGroup,
  Information,
  InformationGroup,
} from './styled';

export function Success() {
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
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
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
                <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </Information>
        </InformationGroup>
        <img src="/images/delivery.svg" alt="" />
      </DeliveryInformationGroup>
    </ContainerSuccess>
  );
}
