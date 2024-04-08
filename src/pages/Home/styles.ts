import styled from 'styled-components';
import { typography } from '../../styles/themes/typography';

export const ConstainerInfo = styled.div`
  margin-top: 90px;
  display: flex;

  justify-content: space-between;
  gap: 50px;
`;

export const ConstainerInfoText = styled.div`
  display: flex;

  flex-direction: column;
  gap: 66px;
`;

export const InfoText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 588px;
  gap: 12px;

  span:nth-child(1) {
    ${typography.fonts.titleXL}
  }
  span:nth-child(2) {
    ${typography.fonts.textL}
  }
`;
export const InfoIcons = styled.div`
  display: flex;

  max-width: 567px;
  height: 84px;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      gap: 12px;

      :first-child {
        padding: 8px;
        border-radius: 50%;
      }
    }
  }

  span {
    ${typography.fonts.textM}
  }
`;

export const ConstainerInfoImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerCoffes = styled.div`
  margin-top: 110px;

  h2 {
    ${typography.fonts.titleL}
    padding-top: 32px;
    padding-bottom: 34px;
  }
`;

export const ContainerCardCoffees = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`;
