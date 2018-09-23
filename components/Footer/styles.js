import styled from 'styled-components';

import { DARK_BLUE, GREY } from '../../constants';

const Footer = styled.div`
  margin-top: 80px;
  padding: 20px 0;
  background-color: ${DARK_BLUE};
`;
const FooterContainer = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
  }
`;
const Copy = styled.div`
  flex-grow: 1;
  color: ${GREY};
`;
const GithubLink = styled.a`
  display: flex;
  color: ${GREY};
  img {
    display: block;
    height: 20px;
    margin: 0 5px;
  }
`;

export {
  Footer, FooterContainer, Copy, GithubLink,
};
