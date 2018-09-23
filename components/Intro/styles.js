import styled from 'styled-components';

import { GREY } from '../../constants';

const Intro = styled.div`
  position: relative;
  background: #282d35;
  overflow: hidden;
  @media (min-width: 700px) {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    height: auto;
    padding: 100px 20px;
  }
`;
const IntroContent = styled.div`
  width: 80%;
  text-align: left;
`;
const IntroText = styled.div`
  font-family: 'Courier', 'Andale Mono', 'Monaco', sans-serif;
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 10px 0;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;
const CommentText = styled.div`
  font-family: 'Courier', 'Andale Mono', 'Monaco', sans-serif;
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 10px 0;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;
const ScrollDownLabel = styled.span`
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 0;
  color: ${GREY};
  text-align: center;
  @media (max-width: 700px) {
    display: none;
  }
`;

export {
  Intro, IntroContent, IntroText, CommentText, ScrollDownLabel,
};
