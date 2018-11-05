import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const CloseArrow = ({ mouseIdle, ...props }) => (
  <S.Close mouseIdle={mouseIdle} {...props}>
    <svg fill="#ffffff" viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </S.Close>
);

CloseArrow.propTypes = {
  mouseIdle: PropTypes.bool.isRequired,
};

const PrevArrowButton = ({ mouseIdle }) => (
  <S.Arrow mouseIdle={mouseIdle} isLeft>
    <svg fill="#ffffff" width="36px" height="36px" viewBox="0 0 24 24">
      <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
    </svg>
  </S.Arrow>
);

PrevArrowButton.propTypes = {
  mouseIdle: PropTypes.bool.isRequired,
};

const NextArrowButton = ({ mouseIdle }) => (
  <S.Arrow mouseIdle={mouseIdle} isRight>
    <svg fill="#ffffff" width="36px" height="36px" viewBox="0 0 24 24">
      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
    </svg>
  </S.Arrow>
);

NextArrowButton.propTypes = {
  mouseIdle: PropTypes.bool.isRequired,
};

export { CloseArrow, PrevArrowButton, NextArrowButton };
