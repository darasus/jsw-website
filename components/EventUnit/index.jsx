import React from 'react';
import PropTypes from 'prop-types';

import EventLinks from '../EventLinks';
import {
  EventStyled,
  EventSpeakerStyled,
  EventSpeakerImageStyled,
  EventSpeakerNameStyled,
  EventSpeakerTwitterStyled,
  EventNameStyled,
  EventDescStyled,
} from './styles';

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
