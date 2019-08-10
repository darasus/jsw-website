import React from 'react';

import { Section, SectionTitle, Wrap } from '../../styles';
import * as S from './styles';
import { socialChannels, LIGHT_GREY } from '../../constants';

const Subscribe = () => (
  <Section paddingBottom={80} color={LIGHT_GREY}>
    <SectionTitle>Get in touch</SectionTitle>
    <Wrap>
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
    </Wrap>
  </Section>
);

export default Subscribe;
