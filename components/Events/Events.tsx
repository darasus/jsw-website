import React, { FC } from 'react';
import PropTypes from 'prop-types';

import * as A from '../../styles';
import { EventUnit } from '../EventUnit';
import { GooglePhotos } from '../GooglePhotos';

export const Events: FC<any> = ({
  events,
  speakers,
  galleryOpen,
  galleryImages,
  galleryIndex,
  handleClickPrev,
  handleClickNext,
  handleClose,
  setImageArr,
  handleOpen,
}) => (
  <A.Section>
    <A.SectionTitle>Events</A.SectionTitle>
    <A.Wrap>
      {events.map((event: any, i: number) => {
        const {
          id,
          data: {
            event_title: eventTitle,
            event_description: eventDescription,
            event_date: eventDate,
            event_speaker: eventSpeaker,
            meetup_link: meetupLink,
            slides_link: slidesLink,
            event_pictures: eventPictures,
          },
        } = event;
        const speaker = speakers.find(
          (spkr: any) => eventSpeaker.id === spkr.id,
        );
        const {
          first_name: firstName,
          last_name: lastName,
          profile_picture: profilePicture,
          twitter_handle: twitterHandle,
        } = speaker.data;
        return (
          <React.Fragment key={id}>
            <EventUnit
              setImageArr={setImageArr}
              handleOpen={handleOpen}
              profilePicture={profilePicture.url}
              twitterHandle={twitterHandle[0].text}
              firstName={firstName[0].text}
              lastName={lastName[0].text}
              {...{
                i,
                id,
                eventTitle,
                eventDescription,
                eventDate,
                meetupLink,
                slidesLink,
                eventPictures,
                speakers,
              }}
            />
          </React.Fragment>
        );
      })}
    </A.Wrap>
    <GooglePhotos
      open={galleryOpen}
      src={galleryImages}
      srcIndex={galleryIndex}
      onClickPrev={handleClickPrev}
      onClickNext={handleClickNext}
      onClose={handleClose}
    />
  </A.Section>
);

Events.propTypes = {
  events: PropTypes.oneOfType([PropTypes.array]).isRequired,
  speakers: PropTypes.oneOfType([PropTypes.array]).isRequired,
  galleryImages: PropTypes.oneOfType([PropTypes.array]).isRequired,
  galleryOpen: PropTypes.bool.isRequired,
  galleryIndex: PropTypes.number.isRequired,
  handleClickPrev: PropTypes.func.isRequired,
  handleClickNext: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  setImageArr: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};
