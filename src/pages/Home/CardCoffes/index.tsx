import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react';
import {
  ButtonShoppingCart,
  CoffeeDescription,
  CoffeeImage,
  CoffeePrice,
  CoffeeTitle,
  ContainerCard,
  DivQuantityInput,
  Price,
  QuantityInput,
  TagCoffee,
} from './styles';
import { useContext, useState } from 'react';
import { CartContext } from '../../../Hooks/useCart';

export interface ICardCoffes {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
}

export function CardCoffes({ coffee }: ICardCoffes) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);
  const { addItemToCart } = useContext(CartContext);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  function onAddToCart() {
    addToCart(quantity);
    addItemToCart({ coffee });
    setQuantity(0);
  }

  return (
    <ContainerCard>
      <CoffeeImage src={coffee.image} alt={''} />
      <TagCoffee>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag.toUpperCase()}</span>
        ))}
      </TagCoffee>
      <CoffeeTitle>
        <span>{coffee.title}</span>
      </CoffeeTitle>
      <CoffeeDescription>
        <span>{coffee.description}</span>
      </CoffeeDescription>
      <CoffeePrice>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <DivQuantityInput>
          <QuantityInput>
            <button onClick={decreaseQuantity}>
              <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>
              <Plus size={14} />
            </button>
          </QuantityInput>
          <ButtonShoppingCart onClick={onAddToCart}>
            <ShoppingCartSimple size={20} color="#ffffff" weight="fill" />
          </ButtonShoppingCart>
        </DivQuantityInput>
      </CoffeePrice>
    </ContainerCard>
  );
}
