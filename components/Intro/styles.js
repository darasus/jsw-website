import styled from 'styled-components';

import { GREY, breakpoint } from '../../constants';

const Intro = styled.section`
  position: relative;
  background: #282d35;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  padding: 100px 0px;
  @media (min-width: ${breakpoint.large}px) {
    height: 100vh;
    padding: 0;
  }
`;

const IntroContent = styled.div`
  text-align: left;
`;

const IntroText = styled.div`
  font-size: 1.2rem;
  margin: 0 0 10px 0;
  @media (min-width: ${breakpoint.large}px) {
    font-size: 2rem;
  }
`;

const CommentText = styled.div`
  @media (min-width: ${breakpoint.large}px) {
    font-size: 1.5rem;
  }
`;

const ScrollDownLabel = styled.span`
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 0;
  color: ${GREY};
  text-align: center;
  display: none;
  @media (min-width: ${breakpoint.large}px) {
    display: block;
  }
`;

export {
  Intro, IntroContent, IntroText, CommentText, ScrollDownLabel,
};
