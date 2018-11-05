import React from 'react';

import {
  PURPLE, YELLOW, RED, GREY, GREEN,
} from '../../constants';
import * as A from '../../styles';
import * as S from './styles';

const Intro = () => (
  <S.Intro>
    <A.Wrap>
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
          {'// A series of mini-workshops about JavaScript and everything related'}
        </span>
      </S.CommentText>
      <S.ScrollDownLabel>
        {'Scroll down'}
      </S.ScrollDownLabel>
    </A.Wrap>
  </S.Intro>
);

export default Intro;
