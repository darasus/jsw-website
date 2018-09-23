import styled from 'styled-components';

import { Container } from '../../styles/styles';

const SubscribeContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Channel = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  @media (max-width: 700px) {
    margin: 0 0 20px 0;
  }
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;
const ChannelIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  margin-bottom: 10px;
  img {
    height: 50%;
    width: 50%;
    opacity: 0.5;
  }
`;
const ChannelName = styled.span``;

export {
  SubscribeContainer, Channel, ChannelIcon, ChannelName,
};
