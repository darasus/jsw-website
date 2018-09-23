import styled from 'styled-components';

import { LIGHT_GREY, RED } from '../../constants';

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
`;
const Link = styled.a`
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
const LinkIcon = styled.img`
  display: block;
  height: 17px;
  margin-right: 10px;
  opacity: 0.5;
`;

export { Links, Link, LinkIcon };
