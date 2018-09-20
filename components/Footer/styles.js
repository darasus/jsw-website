import styled from 'styled-components';

import { DARK_BLUE, GREY } from '../../constants';

export const FooterStyled = styled.div`
  margin-top: 80px;
  padding: 20px 0;
  background-color: ${DARK_BLUE};
`;
export const FooterContainerStyled = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
  }
`;
export const CopyStyled = styled.div`
  flex-grow: 1;
  color: ${GREY};
`;
export const GithubLinkStyled = styled.a`
  display: flex;
  color: ${GREY};
  img {
    display: block;
    height: 20px;
    margin: 0 5px;
  }
`;
