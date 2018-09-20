import React from 'react';
import PropTypes from 'prop-types';

import { DividerStyled } from './styles';
import GooglePhoto from '../GooglePhotos';
import EventUnit from '../EventUnit';
import { SectionStyled, SectionTitleStyled, ContainerStyled } from '../../styles/styles';

class Events extends React.Component {
  state = {
    galleryIndex: 0,
    galleryOpen: false,
    galleryImages: [{ src: '', width: 100, height: 100 }],
  };

  setImageArr = (galleryImages) => {
    const normalizedImageArr = () => galleryImages.map(image => ({
      src: image.event_picture.url,
      width: image.event_picture.dimensions.width,
      height: image.event_picture.dimensions.height,
    }));
    this.setState({ galleryImages: normalizedImageArr() });
  };

  handleClickPrev = () => {
    const { galleryIndex } = this.state;
    this.setState({ galleryIndex: galleryIndex - 1 });
  };

  handleClickNext = () => {
    const { galleryIndex } = this.state;
    this.setState({ galleryIndex: galleryIndex + 1 });
  };

  handleOpen = () => {
    this.setState({ galleryOpen: true, galleryIndex: 0 });
  };

  handleClose = () => {
    this.setState({ galleryOpen: false, galleryIndex: 0 });
  };

  render() {
    const { events, speakers } = this.props;
    const { galleryOpen, galleryImages, galleryIndex } = this.state;
    return (
      <SectionStyled>
        <SectionTitleStyled>
Events
        </SectionTitleStyled>
        <ContainerStyled>
          {events.map(
            (
              {
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
              },
              i,
            ) => {
              const speaker = speakers.find(spkr => eventSpeaker.id === spkr.id);
              const {
                first_name: firstName,
                last_name: lastName,
                profile_picture: profilePicture,
                twitter_handle: twitterHandle,
              } = speaker.data;
              return (
                <React.Fragment key={id}>
                  <EventUnit
                    setImageArr={this.setImageArr}
                    handleOpen={this.handleOpen}
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
                  {!(events.length - 1 === i) && <DividerStyled />}
                </React.Fragment>
              );
            },
          )}
        </ContainerStyled>
        <GooglePhoto
          open={galleryOpen}
          src={galleryImages}
          srcIndex={galleryIndex}
          onClickPrev={this.handleClickPrev}
          onClickNext={this.handleClickNext}
          onClose={this.handleClose}
        />
      </SectionStyled>
    );
  }
}

Events.propTypes = {
  events: PropTypes.oneOfType([PropTypes.array]).isRequired,
  speakers: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Events;
