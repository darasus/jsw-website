import styled from 'styled-components';

import { breakpoint } from '../../constants';

const Channels = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: ${breakpoint.large}px) {
    flex-direction: row;
  }
`;

const Channel = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px 0;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  @media (min-width: ${breakpoint.large}px) {
    margin: 0 10px;
  }
`;

const ChannelIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: ${({ color }) => color};
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin-bottom: 10px;
  img {
    height: 40%;
    width: 40%;
    opacity: 0.8;
  }
`;

const ChannelName = styled.span`
  text-transform: capitalize;
`;

export {
  Channels, Channel, ChannelIcon, ChannelName,
};
