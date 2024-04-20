import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from '@phosphor-icons/react';
import {
  ContainerCheckout,
  ContainerPaymentData,
  ContainerAdress,
  ContainerPayment,
  Payment,
  QuantityControl,
  CoffeeOrder,
  OrderContainer,
  CoffeeItem,
  CoffeeDetails,
  RemoveOption,
  TotalSection,
  TotalItem,
  ConfirmButton,
} from './styles';
import { CartContext } from '../../Hooks/useCart';
import { useContext } from 'react';

export function Checkout() {
  const { cartItems, updateCartItemQuantity } = useContext(CartContext);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    updateCartItemQuantity(itemId, newQuantity);
  };

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

      <OrderContainer>
        <span>Cafés selecionados</span>
        <CoffeeOrder>
          {cartItems.map((item) => (
            <CoffeeItem key={item.coffee.id}>
              <img src={item.coffee.image} alt="" />
              <CoffeeDetails>
                <span>{item.coffee.title}</span>

                <div>
                  <QuantityControl>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.coffee.id,
                          item.coffee.quantity - 1
                        )
                      }
                    >
                      <Minus size={14} />
                    </button>
                    <span>{item.coffee.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.coffee.id,
                          item.coffee.quantity + 1
                        )
                      }
                    >
                      <Plus size={14} />
                    </button>
                  </QuantityControl>
                  <RemoveOption>
                    <Trash size={16} />
                    <span>REMOVER</span>
                  </RemoveOption>
                </div>
              </CoffeeDetails>
              <span>R${item.coffee.price.toFixed(2)}</span>
            </CoffeeItem>
          ))}

          <TotalSection>
            <TotalItem>
              <span>Total de itens</span>
              <span>R$29,70</span>
            </TotalItem>
            <TotalItem>
              <span>Entrega</span>
              <span>R$3,50</span>
            </TotalItem>
            <TotalItem>
              <span>Total</span>
              <span>R$32,20</span>
            </TotalItem>
          </TotalSection>
          <ConfirmButton>
            <span>CONFIRMAR PEDIDO</span>
          </ConfirmButton>
        </CoffeeOrder>
      </OrderContainer>
    </ContainerCheckout>
  );
}
