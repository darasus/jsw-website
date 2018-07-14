import React from 'react';
import styled from 'styled-components';

import { DARK_BLUE, GREY } from '../../constants/colors';

const FooterStyled = styled.div`
  margin-top: 80px;
  padding: 20px 0;
  background-color: ${DARK_BLUE};
`;
const FooterContainerStyled = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
  }
`;
const CopyStyled = styled.div`
  flex-grow: 1;
  color: ${GREY};
`;
const GithubLinkStyled = styled.a`
  display: flex;
  color: ${GREY};
  img {
    display: block;
    height: 20px;
    margin: 0 5px
  }
`;

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
