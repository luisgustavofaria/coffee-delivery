import {
  CoffeeDescription,
  CoffeeImage,
  CoffeeTitle,
  ContainerCard,
  TagCoffee,
} from './styles';

// interface ICardCoffes {
//   id: string;
//   title: string;
//   description: string;
//   tags: string;
//   price: number;
//   image: string;
// }

export function CardCoffes() {
  return (
    <ContainerCard>
      <CoffeeImage src={'/images/coffees/americano.png'} alt={''} />
      <TagCoffee>
        <span>TRADICIONAL</span>
      </TagCoffee>
      <CoffeeTitle>
        <span>Expresso Tradicional</span>
      </CoffeeTitle>
      <CoffeeDescription>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </CoffeeDescription>
    </ContainerCard>
  );
}
