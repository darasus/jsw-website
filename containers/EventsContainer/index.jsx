import React from 'react';
import PropTypes from 'prop-types';

import Events from '../../components/Events/Events';

class EventsContainer extends React.Component {
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
      <Events
        {...{
          events,
          speakers,
          galleryOpen,
          galleryImages,
          galleryIndex,
        }}
        handleClickPrev={this.handleClickPrev}
        handleClickNext={this.handleClickNext}
        setImageArr={this.setImageArr}
        handleOpen={this.handleOpen}
        handleClose={this.handleClose}
      />
    );
  }
}

EventsContainer.propTypes = {
  events: PropTypes.oneOfType([PropTypes.array]).isRequired,
  speakers: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default EventsContainer;
