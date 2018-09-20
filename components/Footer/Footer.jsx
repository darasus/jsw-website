import React from 'react';

import {
  FooterStyled, FooterContainerStyled, CopyStyled, GithubLinkStyled,
} from './styles';

const Footer = () => (
  <FooterStyled>
    <FooterContainerStyled>
      <CopyStyled>
        {`${new Date().getFullYear()} © JSW`}
      </CopyStyled>
      <GithubLinkStyled href="https://github.com/daraselia/jsw-website" target="_blank">
        {'Open-sourced on '}
        <img src="/static/img/github.svg" alt="github" />
        {' GitHub'}
      </GithubLinkStyled>
    </FooterContainerStyled>
  </FooterStyled>
);

export default Footer;
