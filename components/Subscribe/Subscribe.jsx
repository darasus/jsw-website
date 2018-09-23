import React from 'react';

import * as A from '../../styles/styles';
import * as S from './styles';
import { socialChannels } from '../../constants';

const Subscribe = () => (
  <A.Section>
    <A.SectionTitle>
      {'Get in touch'}
    </A.SectionTitle>
    <S.SubscribeContainer>
      {socialChannels.map(({ name, color, link }) => (
        <S.Channel key={name} href={link} target="_blank">
          <S.ChannelIcon color={color}>
            <img src={`/static/img/${name.toLowerCase()}.svg`} alt={name} />
          </S.ChannelIcon>
          <S.ChannelName>
            {name}
          </S.ChannelName>
        </S.Channel>
      ))}
    </S.SubscribeContainer>
  </A.Section>
);

export default Subscribe;
