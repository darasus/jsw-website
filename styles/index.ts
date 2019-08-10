import styled from 'styled-components';

import { WHITE, breakpoint } from '../constants';

export const Wrap = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 20px;
  @media (min-width: ${breakpoint.large}px) {
    padding: 0 20px;
  }
`;

export const Section = styled.section<{ paddingBottom?: number }>`
  padding-top: 80px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 0}px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ color }) => color || WHITE};
`;

export const SectionTitle = styled.h2`
  display: block;
  font-family: 'Courier', 'Andale Mono', 'Monaco', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  margin: 0 0 60px;
  text-align: center;
  @media (min-width: ${breakpoint.large}px) {
    font-size: 3rem;
  }
`;
