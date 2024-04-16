import styled from 'styled-components';
import { typography } from '../../styles/themes/typography';

export const ContainerHeader = styled.header`
  width: 100%;
  max-width: 1120px;
  height: 104px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Aside = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const DivLocalization = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors['purple-light']};
  height: 38px;
  border-radius: 5px;
  padding: 12px;
  gap: 5px;

  span {
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`;

export const DivShoppingCart = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  border-radius: 5px;
  padding: 12px;
  background-color: ${(props) => props.theme.colors['yellow-light']};

  svg {
    background-color: ${(props) => props.theme.colors['yellow-light']};
  }
`;

export const CounterCoffees = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors['yellow-dark']};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  top: -15px;
  right: -15px;
  color: white;

  span {
    ${typography.fonts.textM}
    font-weight: bold;

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
