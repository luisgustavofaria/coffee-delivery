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
import { useState } from 'react';

interface ICardCoffes {
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
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
          <ButtonShoppingCart>
            <ShoppingCartSimple size={20} color="#ffffff" weight="fill" />
          </ButtonShoppingCart>
        </DivQuantityInput>
      </CoffeePrice>
    </ContainerCard>
  );
}
