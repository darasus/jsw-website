import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import EventLinks from '../EventLinks';

import { GREY, RED, TWITTER_COLOR } from '../../constants/colors';

const EventStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: ${({ isFirst }) => (isFirst ? '0 0 20px 0' : '20px 0')};
`;
const EventNameStyled = styled.span`
  font-size: 18px;
  font-weight: 500;
  span {
    color: ${GREY};
  }
`;
const EventDescStyled = styled.span`
  color: ${GREY};
`;
const EventSpeakerStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const EventSpeakerImageStyled = styled.div`
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
const EventSpeakerNameStyled = styled.span`
  margin-right: 5px;
  @media (max-width: 700px) {
    flex-grow: 1;
  }
`;
const EventSpeakerTwitterStyled = styled.a`
  color: ${TWITTER_COLOR};
`;

const EventUnit = ({
  i,
  id,
  eventTitle,
  eventDate,
  eventDescription,
  firstName,
  lastName,
  profilePicture,
  twitterHandle,
  meetupLink,
  slidesLink,
  eventPictures,
  setImageArr,
  handleOpen,
}) => (
  <div key={id}>
    <EventStyled isFirst={i === 0}>
      <EventSpeakerStyled>
        <EventSpeakerImageStyled image={profilePicture} />
        <EventSpeakerNameStyled>
          {`${firstName} ${lastName}`}
        </EventSpeakerNameStyled>
        <EventSpeakerTwitterStyled href={`https://twitter.com/${twitterHandle}`} target="_blank">
          {`@${twitterHandle}`}
        </EventSpeakerTwitterStyled>
      </EventSpeakerStyled>
      <EventNameStyled>
        {eventTitle[0].text}
        <span>
          {` • ${eventDate}`}
        </span>
      </EventNameStyled>
      <EventDescStyled>
        {eventDescription[0].text}
      </EventDescStyled>
      <EventLinks
        {...{
          meetupLink,
          slidesLink,
          eventPictures,
          setImageArr,
          handleOpen,
        }}
      />
    </EventStyled>
  </div>
);

EventUnit.propTypes = {
  i: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  eventTitle: PropTypes.oneOfType([PropTypes.array]).isRequired,
  eventDate: PropTypes.string.isRequired,
  eventDescription: PropTypes.oneOfType([PropTypes.array]).isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string.isRequired,
  meetupLink: PropTypes.oneOfType([PropTypes.object]).isRequired,
  slidesLink: PropTypes.oneOfType([PropTypes.object]).isRequired,
  eventPictures: PropTypes.oneOfType([PropTypes.array]).isRequired,
  setImageArr: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default EventUnit;
