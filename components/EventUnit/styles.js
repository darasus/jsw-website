import styled from 'styled-components';

import { GREY, RED, TWITTER_COLOR } from '../../constants';

export const EventStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: ${({ isFirst }) => (isFirst ? '0 0 20px 0' : '20px 0')};
`;

export const EventNameStyled = styled.span`
  font-size: 18px;
  font-weight: 500;
  span {
    color: ${GREY};
  }
`;

export const EventDescStyled = styled.span`
  color: ${GREY};
`;

export const EventSpeakerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const EventSpeakerImageStyled = styled.div`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 2px solid ${RED};
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const EventSpeakerNameStyled = styled.span`
  margin-right: 5px;
  @media (max-width: 700px) {
    flex-grow: 1;
  }
`;

export const EventSpeakerTwitterStyled = styled.a`
  color: ${TWITTER_COLOR};
`;
