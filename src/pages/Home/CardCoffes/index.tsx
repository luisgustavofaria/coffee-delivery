import {
  CoffeeDescription,
  CoffeeImage,
  CoffeeTitle,
  ContainerCard,
  TagCoffee,
} from './styles';

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
  return (
    <ContainerCard>
      <CoffeeImage src={coffee.image} alt={''} />
      <TagCoffee>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagCoffee>
      <CoffeeTitle>
        <span>{coffee.title}</span>
      </CoffeeTitle>
      <CoffeeDescription>
        <span>{coffee.description}</span>
      </CoffeeDescription>
    </ContainerCard>
  );
}
