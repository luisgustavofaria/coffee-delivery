import styled from 'styled-components';

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

  div:first-child {
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
  }

  div:last-child {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors['yellow-light']};
    height: 38px;
    border-radius: 5px;
    padding: 12px;
  }
`;
