import styled from 'styled-components';
import { typography } from '../../../styles/themes/typography';

export const ContainerCard = styled.div`
  background-color: #f3f2f2;
  position: relative;

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
  position: absolute;
  display: flex;
  align-items: center;

  gap: 20px;
  bottom: 20px;
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
  padding: 3px 0px 3px 0px;

  display: flex;
  align-items: center;
  background-color: #e6e5e5;
  gap: 5px;
  border-radius: 5px;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:first-child {
      padding: 7px 3px 7px 5px;
    }
    &:last-child {
      padding: 7px 5px 7px 3px;
    }

    &:hover {
      svg {
        color: ${(props) => props.theme.colors['purple-dark']};
        transform: scale(1.3);
      }
    }
  }

  span {
    ${typography.fonts.textM}
    color: #272221;
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
