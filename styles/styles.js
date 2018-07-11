import styled from 'styled-components';

import { GREY, WHITE } from '../contants/colors';

export const SectionStyled = styled.section`
  padding-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ grey }) => {
    if (grey) {
      return GREY;
    }
    return WHITE;
  }};
`;
export const SectionTitleStyled = styled.span`
  font-family: Fira Code, sans-serif;
  font-weight: bold;
  font-size: 40px;
  margin: 0 0 60px;
`;
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
`;
