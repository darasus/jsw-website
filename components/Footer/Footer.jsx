import React from 'react';

import * as S from './styles';

const Footer = () => (
  <S.Footer>
    <S.FooterContainer>
      <S.Copy>
        {`${new Date().getFullYear()} © JSW`}
      </S.Copy>
      <S.GithubLink href="https://github.com/daraselia/jsw-website" target="_blank">
        {'Open-sourced on '}
        <img src="/static/img/github.svg" alt="github" />
        {' GitHub'}
      </S.GithubLink>
    </S.FooterContainer>
  </S.Footer>
);

export default Footer;
