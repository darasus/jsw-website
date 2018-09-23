import React from 'react';

import {
  PURPLE, YELLOW, RED, GREY, GREEN,
} from '../../constants';
import * as S from './styles';

const Intro = () => (
  <S.Intro>
    <S.IntroContent>
      <S.IntroText>
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
      </S.IntroText>
      <S.CommentText>
        <span style={{ color: GREY }}>
          {'//'}
        </span>
        {' '}
        <span style={{ color: GREY }}>
          {'A series of mini-workshops about JavaScript and everything related'}
        </span>
      </S.CommentText>
      <S.ScrollDownLabel>
        {'Scroll down'}
      </S.ScrollDownLabel>
    </S.IntroContent>
  </S.Intro>
);

export default Intro;
