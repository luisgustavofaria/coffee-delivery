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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

interface AdressDetails {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export function Checkout() {
  const { register, handleSubmit } = useForm<AdressDetails>({
    resolver: zodResolver(
      zod.object({
        cep: zod.string().min(1, 'Digitar'),
        rua: zod.string().min(1, 'Digitar'),
        numero: zod.string().min(1, 'Digitar'),
        complemento: zod.string(),
        bairro: zod.string().min(1, 'Digitar'),
        cidade: zod.string().min(1, 'Digitar'),
        uf: zod.string().min(1, 'Digitar'),
      })
    ),
  });
  const { cartItems, updateCartItemQuantity, removeItem } =
    useContext(CartContext);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity >= 1) updateCartItemQuantity(itemId, newQuantity);
  };

  const onRemoveItem = (itemId: string) => {
    removeItem(itemId);
  };

  const totalItemsPrice = cartItems.reduce(
    (acc, item) => acc + item.coffee.price * item.coffee.quantity,
    0
  );
  const totalfrete = 3.5;
  const totalPrice = totalItemsPrice + totalfrete;

  function handleCreateAdress(data: AdressDetails) {
    console.log(data);
  }

  const handleConfirmButtonClick = () => {
    handleSubmit(handleCreateAdress)();
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
          <form onSubmit={handleSubmit(handleCreateAdress)}>
            <input type="text" placeholder="CEP" {...register('cep')} />
            <input type="text" placeholder="Rua" {...register('rua')} />
            <div>
              <input type="text" placeholder="Número" {...register('numero')} />
              <input
                type="text"
                placeholder="Complemento"
                {...register('complemento')}
              />
            </div>
            <div>
              <input type="text" placeholder="Bairro" {...register('bairro')} />
              <input type="text" placeholder="Cidade" {...register('cidade')} />
              <input type="text" placeholder="UF" {...register('uf')} />
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
                  <RemoveOption onClick={() => onRemoveItem(item.coffee.id)}>
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
              <span>
                R$
                {totalItemsPrice.toFixed(2).replace('.', ',')}
              </span>
            </TotalItem>
            <TotalItem>
              <span>Entrega</span>
              <span>R$3,50</span>
            </TotalItem>
            <TotalItem>
              <span>Total</span>
              <span>R${totalPrice.toFixed(2).replace('.', ',')}</span>
            </TotalItem>
          </TotalSection>
          <ConfirmButton onClick={handleConfirmButtonClick}>
            <span>CONFIRMAR PEDIDO</span>
          </ConfirmButton>
        </CoffeeOrder>
      </OrderContainer>
    </ContainerCheckout>
  );
}
