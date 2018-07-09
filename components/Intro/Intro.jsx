import React from 'react';
import styled from 'styled-components';

import {
  PURPLE, YELLOW, RED, GREY, GREEN,
} from '../../contants/colors';

const IntroStyled = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #282d35;
  overflow: hidden;
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
`;
const CommentTextStyled = styled.div`
  font-family: Fira Code, sans-serif;
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 10px 0;
`;
const ScrollDownLabel = styled.span`
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 0;
  color: ${GREY};
  text-align: center;
`;

const Intro = () => (
  <IntroStyled>
    <IntroContentStyled>
      <IntroTextStyled>
        <span style={{ color: PURPLE }}>
          {'const'}
        </span>
        {' '}
        <span style={{ color: YELLOW }}>
js
        </span>
        <span style={{ color: RED }}>
          {'w'}
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
      <div />
    </IntroContentStyled>
  </IntroStyled>
);

export default Intro;
