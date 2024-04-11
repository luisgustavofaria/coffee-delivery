import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react';
import {
  ContainerCheckout,
  ContainerPaymentData,
  ContainerAdress,
  ContainerPayment,
  Payment,
} from './styles';

export function Checkout() {
  return (
    <ContainerCheckout>
      <ContainerPaymentData>
        <span>Complete seu pedido</span>
        <ContainerAdress>
          <div>
            <MapPinLine size={22} color="#C47F17" />
            <div>
              <span>Endereço de entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <form action="">
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </form>
        </ContainerAdress>
        <ContainerPayment>
          <div>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>
          <Payment>
            <button>
              <CreditCard size={16} color="#8047F8" />
              <span>CARTÃO DE CREDITO</span>
            </button>
            <button>
              <Bank size={16} color="#8047F8" />
              <span>CARTÃO DE DÉBITO</span>
            </button>
            <button>
              <Money size={16} color="#8047F8" />
              <span>DINHEIRO</span>
            </button>
          </Payment>
        </ContainerPayment>
      </ContainerPaymentData>

      <div>
        <span>Cafés selecionados</span>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <span>Expresso Tradicional</span>
              <div>
                <div>
                  <img src="" alt="" />
                  <span>1</span>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                  <span>REMOVER</span>
                </div>
              </div>
              <span>R$9,90</span>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              <span>Latte</span>
              <div>
                <div>
                  <img src="" alt="" />
                  <span>1</span>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                  <span>REMOVER</span>
                </div>
              </div>
              <span>R$19,80</span>
            </div>
          </div>
          <div>
            <div>
              <span>Total de itens</span>
              <span>R$29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$32,20</span>
            </div>
          </div>
          <div>
            <span>CONFIRMAR PEDIDO</span>
          </div>
        </div>
      </div>
    </ContainerCheckout>
  );
}
