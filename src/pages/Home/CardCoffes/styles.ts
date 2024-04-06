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
  color: #c47f17;
  background-color: #f1e9c9;
  padding: 5px;
  border-radius: 100px;
`;

export const CoffeeTitle = styled.span`
  ${typography.fonts.titleS}
`;

export const CoffeeDescription = styled.span`
  ${typography.fonts.textS}
`;
