import styled from 'styled-components';

import { LIGHT_GREY, RED } from '../../constants';

export const LinksStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
`;
export const LinkStyled = styled.a`
  display: flex;
  height: 35px;
  padding: 0 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  align-items: center;
  color: ${RED};
  background-color: ${LIGHT_GREY};
  cursor: pointer;
  text-decoration: underline;
`;
export const LinkIconStyled = styled.img`
  display: block;
  height: 17px;
  margin-right: 10px;
  opacity: 0.5;
`;
