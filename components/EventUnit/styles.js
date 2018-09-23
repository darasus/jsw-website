import styled from 'styled-components';

import {
  GREY, RED, TWITTER_COLOR, DARK_BLUE,
} from '../../constants';

const Event = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: ${({ isFirst }) => (isFirst ? '0 0 20px 0' : '20px 0')};
`;

const EventName = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
  span {
    color: ${GREY};
  }
`;

const EventNameLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
  &:visited {
    color: ${DARK_BLUE};
  }
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

const EventSpeakerImage = styled.div`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 2px solid ${RED};
  margin-right: 5px;
`;

const EventSpeakerName = styled.span`
  margin-right: 5px;
  @media (max-width: 700px) {
    flex-grow: 1;
  }
`;

const EventSpeakerTwitter = styled.a`
  color: ${TWITTER_COLOR};
`;

export {
  Event,
  EventName,
  EventNameLink,
  EventDesc,
  EventSpeaker,
  EventSpeakerImage,
  EventSpeakerName,
  EventSpeakerTwitter,
};
