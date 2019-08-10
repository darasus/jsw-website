import React, { FC } from 'react';
import PropTypes from 'prop-types';

import SizeContainer from '../../containers/SizeContainer';
import { CLOUDINARY_URL } from '../../constants';
import EventLinks from '../EventLinks';
import {
  Event,
  EventSpeaker,
  EventSpeakerImage,
  EventSpeakerInfo,
  EventDate,
  EventSpeakerName,
  EventSpeakerTwitter,
  EventName,
  EventNameLink,
  EventDesc,
} from './styles';
import { getFormatedDate } from '../../utils';

export const EventUnit: FC<any> = ({
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
}) => {
  const isFuture = new Date(eventDate).getTime() - new Date().getTime() > 0;

  return (
    <SizeContainer>
      {(isLarge: any) => (
        <div key={id}>
          <Event isFirst={i === 0}>
            <EventSpeaker>
              <EventSpeakerImage
                image={`${CLOUDINARY_URL}w_120,f_auto/${profilePicture}`}
              />
              <EventSpeakerInfo>
                <EventDate isFuture={isFuture}>
                  {`${getFormatedDate(eventDate)}`}
                </EventDate>
                <div>
                  <EventSpeakerName>{`${firstName} ${lastName}`}</EventSpeakerName>
                  {isLarge ? (
                    <EventSpeakerTwitter
                      href={`https://twitter.com/${twitterHandle}`}
                      target="_blank">
                      {`@${twitterHandle}`}
                    </EventSpeakerTwitter>
                  ) : null}
                </div>
              </EventSpeakerInfo>
            </EventSpeaker>
            <EventName>
              {meetupLink ? (
                <EventNameLink href={meetupLink.url} target="_blank">
                  {eventTitle[0].text}
                </EventNameLink>
              ) : (
                eventTitle[0].text
              )}
            </EventName>
            <EventDesc>{eventDescription[0].text}</EventDesc>
            <EventLinks
              {...{
                meetupLink,
                slidesLink,
                eventPictures,
                setImageArr,
                handleOpen,
              }}
            />
          </Event>
        </div>
      )}
    </SizeContainer>
  );
};

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
