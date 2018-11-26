import React from 'react';

import * as A from '../../styles';
import * as S from './styles';
import { socialChannels, LIGHT_GREY } from '../../constants';

const Subscribe = () => (
  <A.Section paddingBottom="80" color={LIGHT_GREY}>
    <A.SectionTitle>Get in touch</A.SectionTitle>
    <A.Wrap>
      <S.Channels>
        {socialChannels.map(({ name, color, link }) => (
          <S.Channel key={name} href={link} target="_blank">
            <S.ChannelIcon color={color}>
              <img src={`/static/${name.toLowerCase()}.svg`} alt={name} />
            </S.ChannelIcon>
            <S.ChannelName>{name}</S.ChannelName>
          </S.Channel>
        ))}
      </S.Channels>
    </A.Wrap>
  </A.Section>
);

export default Subscribe;
