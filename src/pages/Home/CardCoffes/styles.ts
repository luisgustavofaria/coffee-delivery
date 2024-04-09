import styled from 'styled-components';
import { typography } from '../../../styles/themes/typography';

export const ContainerCard = styled.div`
  background-color: #f3f2f2;

  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoffeeImage = styled.img`
  margin-top: -20px;
  width: 120px;
  height: 120px;
`;

export const TagCoffee = styled.div`
  ${typography.fonts.tag}
  margin-top: 10px;
  display: flex;
  gap: 5px;

  span {
    color: #c47f17;
    background-color: #f1e9c9;
    padding: 5px;
    border-radius: 100px;
  }
`;

export const CoffeeTitle = styled.span`
  ${typography.fonts.titleS}
  margin-top: 16px;
`;

export const CoffeeDescription = styled.span`
  ${typography.fonts.textS}
  padding: 0 20px 0;
  color: #8d8686;
  margin-top: 8px;
`;

export const CoffeePrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 33px;
  gap: 20px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  :first-child {
    ${typography.fonts.textS}
    color: #574F4D;
  }
  :last-child {
    ${typography.fonts.titleM}
    color: #574F4D;
  }
`;

export const DivQuantityInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const QuantityInput = styled.div`
  padding: 7px 10px 7px 10px;

  display: flex;
  align-items: center;
  background-color: #e6e5e5;
  gap: 7px;
  border-radius: 5px;

  span {
    ${typography.fonts.textM}
    color: #272221;
  }

  svg {
    color: #8047f8;
    cursor: pointer;
    &:hover {
      color: #4b2995;
    }
  }
`;

export const ButtonShoppingCart = styled.div`
  background-color: #8047f8;
  border-radius: 5px;
  padding: 5px 7px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #4b2995;
  }
`;
