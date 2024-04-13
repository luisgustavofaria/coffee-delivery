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
  }

  input {
    background-color: #ededed;
    border: none;
    padding: 12px;
    border-radius: 5px;
    ${typography.fonts.textS}
    color: ${(props) => props.theme.colors['base-label']};
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

  svg {
    color: ${(props) => props.theme.colors.purple};
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
export const ConfirmButton = styled.div`
  padding: 12px;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 8px;
  text-align: center;

  span {
    ${typography.fonts.buttonG}
    color: ${(props) => props.theme.colors.white};
  }
`;

/* img {
    width: 64px;
  }

  > div {
    display: flex;
    flex-direction: column;

    

    div:nth-child(2) {
      display: flex;
      gap: 5px;
      padding: 8px;
      
    }
    div:nth-child(3) {
    }
  } */
