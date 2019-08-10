import styled from 'styled-components';

import {
  breakpoint,
  DARK_BLUE,
  GREY,
  TWITTER_COLOR,
  RED,
} from '../../constants';

const Event = styled.div<{ isFirst: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: ${({ isFirst }) => (isFirst ? '0 0 50px 0' : '50px 0')};
`;

const EventSpeakerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EventName = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 5px;
  @media (max-width: ${breakpoint.large}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const EventNameLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
  color: ${DARK_BLUE};
  margin-bottom: 5px;
  &:visited {
    color: ${DARK_BLUE};
  }
  @media (min-width: ${breakpoint.large}px) {
    margin-right: 10px;
    margin-bottom: 0px;
  }
`;

const EventDate = styled.span<{ isFuture: boolean }>`
  color: #fff;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 100px;
  background-color: ${({ isFuture }) => (isFuture ? '#00dc00' : GREY)};
  margin-bottom: 5px;
`;

const EventDesc = styled.span`
  color: ${GREY};
`;

const EventSpeaker = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

const EventSpeakerImage = styled.div<{ image: string }>`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 2px solid ${RED};
  margin-right: 5px;
`;

const EventSpeakerName = styled.span`
  margin-right: 5px;
`;

const EventSpeakerTwitter = styled.a`
  color: ${TWITTER_COLOR};
  margin-right: 10px;
`;

export {
  Event,
  EventSpeakerInfo,
  EventName,
  EventNameLink,
  EventDate,
  EventDesc,
  EventSpeaker,
  EventSpeakerImage,
  EventSpeakerName,
  EventSpeakerTwitter,
};
