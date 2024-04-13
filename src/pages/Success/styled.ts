import { styled } from 'styled-components';
import { typography } from '../../styles/themes/typography';

export const ContainerSuccess = styled.div`
  margin-top: 80px;

  > span {
    display: flex;
    gap: 4px;

    &:nth-child(1) {
      ${typography.fonts.titleL}
      color: ${(props) => props.theme.colors['yellow-dark']};
    }

    &:nth-child(2) {
      ${typography.fonts.textL}
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }
`;

export const DeliveryInformationGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
`;
export const InformationGroup = styled.div`
  width: 526px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  border: 1px solid ${(props) => props.theme.colors.yellow};
  border-radius: 8px 40px;
  align-self: center;
`;
export const Information = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    color: ${(props) => props.theme.colors['base-text']};
  }

  svg {
    display: flex;
    align-items: center;
  }

  &:nth-child(1) {
    div:first-child {
      border-radius: 999px;
      padding: 8px;
      background-color: ${(props) => props.theme.colors.purple};
    }
  }
  &:nth-child(2) {
    div:first-child {
      padding: 8px;
      border-radius: 999px;
      background-color: ${(props) => props.theme.colors.yellow};
    }
  }
  &:nth-child(3) {
    div:first-child {
      padding: 8px;
      border-radius: 999px;
      background-color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;
