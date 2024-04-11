import { styled } from 'styled-components';
import { typography } from '../../styles/themes/typography';

export const ContainerCheckout = styled.div`
  display: flex;
  margin-top: 40px;
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

    &:focus {
      border: 1px solid #8047f8;
    }
  }
`;
