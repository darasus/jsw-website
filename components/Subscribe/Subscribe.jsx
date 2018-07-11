import React from 'react';
import styled from 'styled-components';

import { SectionStyled, SectionTitleStyled, ContainerStyled } from '../../styles/styles';

const SubscribeContainerStyled = ContainerStyled.extend`
  display: flex;
  flex-direction: row;
`;
const ChannelStyled = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;
const ChannelIconStyled = styled.div`
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
const ChannelNameStyled = styled.span``;

class Subscribe extends React.Component {
  state = {
    channels: [],
    loading: true,
  };

  componentDidMount = async () => {
    const fetchedChannels = await fetch('/static/data/channels.json');
    const channels = await fetchedChannels.json();
    this.setState({
      channels: channels.data,
      loading: false,
    });
  };

  render() {
    const { channels, loading } = this.state;
    if (loading) {
      return (
        <span>
          {'Loading...'}
        </span>
      );
    }
    return (
      <SectionStyled>
        <SectionTitleStyled>
          {'Follow us'}
        </SectionTitleStyled>
        <SubscribeContainerStyled>
          {channels.map(({ name, color, link }) => (
            <ChannelStyled key={name} href={link} target="_blank">
              <ChannelIconStyled color={color}>
                <img src={`/static/img/${name.toLowerCase()}.svg`} alt={name} />
              </ChannelIconStyled>
              <ChannelNameStyled>
                {name}
              </ChannelNameStyled>
            </ChannelStyled>
          ))}
        </SubscribeContainerStyled>
      </SectionStyled>
    );
  }
}

export default Subscribe;
