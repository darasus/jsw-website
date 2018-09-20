import React from 'react';
import styled from 'styled-components';

import {
  PURPLE, YELLOW, RED, GREY, GREEN,
} from '../../constants';

const IntroStyled = styled.div`
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
const IntroContentStyled = styled.div`
  width: 80%;
  text-align: left;
`;
const IntroTextStyled = styled.div`
  font-family: Fira Code, sans-serif;
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 10px 0;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;
const CommentTextStyled = styled.div`
  font-family: Fira Code, sans-serif;
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

const Intro = () => (
  <IntroStyled>
    <IntroContentStyled>
      <IntroTextStyled>
        <span style={{ color: PURPLE }}>
const
        </span>
        {' '}
        <span style={{ color: YELLOW }}>
js
        </span>
        <span style={{ color: RED }}>
w
        </span>
        {' '}
        <span style={{ color: GREY }}>
=
        </span>
        {' '}
        <span style={{ color: GREEN }}>
          {"'JavaScript Workshops'"}
        </span>
      </IntroTextStyled>
      <CommentTextStyled>
        <span style={{ color: GREY }}>
          {'//'}
        </span>
        {' '}
        <span style={{ color: GREY }}>
          {'A series of mini-workshops about JavaScript and everything related'}
        </span>
      </CommentTextStyled>
      <ScrollDownLabel>
        {'Scroll down'}
      </ScrollDownLabel>
    </IntroContentStyled>
  </IntroStyled>
);

export default Intro;
