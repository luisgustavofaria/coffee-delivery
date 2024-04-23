import { styled } from 'styled-components';
import { typography } from '../../styles/themes/typography';

export const ContainerCheckout = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
`;

export const ContainerPaymentData = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  > span:nth-child(1) {
    ${typography.fonts.titleXS}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`;

export const ContainerAddressPayment = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 5px;

  > div:nth-child(1) {
    display: flex;
    gap: 7px;
    margin-bottom: 32px;

    span:first-child {
      ${typography.fonts.textM}
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
    span:last-child {
      ${typography.fonts.textS}
      color: ${(props) => props.theme.colors['base-text']};
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: normal;
      gap: 5px;
    }
  }
`;

export const DivRelative = styled.div`
  position: relative;
`;

export const ContainerAdress = styled(ContainerAddressPayment)`
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    input:nth-child(1) {
      width: 200px;
    }

    > div {
      display: flex;
      gap: 12px;

      > input:nth-child(2) {
        flex-grow: 1;
      }
      > input:nth-child(3) {
        width: 60px;
      }
    }
    strong {
      position: absolute;
    }
  }

  input {
    background-color: #ededed;
    border: none; //tirar borda do input
    outline: none; //tirar borda do input focus
    padding: 11px;
    border-radius: 5px;
    ${typography.fonts.textS}
    color: ${(props) => props.theme.colors['base-label']};
    border: 1px solid transparent;
  }

  input:focus {
    border-color: ${(props) => props.theme.colors.yellow};
  }
`;

export const ContainerPayment = styled(ContainerAddressPayment)``;

export const Payment = styled.div`
  display: flex;
  gap: 12px;
  flex-grow: 1;

  span {
    ${typography.fonts.buttonM}
    color: ${(props) => props.theme.colors['base-text']};
  }

  button {
    border: 1px solid transparent;
    padding: 12px;
    display: flex;
    background-color: #ededed;
    gap: 12px;
    align-items: center;
    flex: 1;
    cursor: pointer;
    border-radius: 5px;
  }

  :focus {
    border: 1px solid #8047f8;
    background-color: ${(props) => props.theme.colors['base-card']};
  }
`;

export const OrderContainer = styled.div`
  width: 448px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  > span:nth-child(1) {
    ${typography.fonts.titleXS}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`;

export const CoffeeOrder = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 5px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CoffeeItem = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  img {
    width: 64px;
  }

  > span {
    ${typography.fonts.textM}
    font-weight: bold;
    color: ${(props) => props.theme.colors['base-text']};
  }
`;

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;

  > span {
    ${typography.fonts.textM}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  > div {
    display: flex;
    gap: 8px;
    border-radius: 8px;
  }
`;
export const QuantityControl = styled.div`
  background-color: ${(props) => props.theme.colors['base-button']};
  ${typography.fonts.textM}
  color: ${(props) => props.theme.colors['base-title']};
  display: flex;
  align-items: center;
  border-radius: 5px;

  button {
    padding: 10px 8px;
    background-color: ${(props) => props.theme.colors['base-button']};
    display: flex;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.purple};
    border-radius: 8px;

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`;
export const RemoveOption = styled.div`
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors['base-button']};
  ${typography.fonts.buttonM}
  color: ${(props) => props.theme.colors['base-text']};
  display: flex;
  align-items: center;
  padding: 5px 8px;
  gap: 5px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};

    svg {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`;
export const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    ${typography.fonts.textS}
    color: ${(props) => props.theme.colors['base-text']};
  }

  div:last-child {
    span {
      ${typography.fonts.textL}
      font-weight: bold;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }
`;
export const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ConfirmButton = styled.button`
  padding: 12px;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 8px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
  }

  span {
    ${typography.fonts.buttonG}
    color: ${(props) => props.theme.colors.white};
  }
`;
