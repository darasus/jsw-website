import React, { FC, useState } from 'react';

import { Events } from '../../components/Events';

const EventsContainer: FC<any> = ({ events, speakers }) => {
  const [state, setState] = useState({
    galleryIndex: 0,
    galleryOpen: false,
    galleryImages: [{ src: '', width: 100, height: 100 }],
  });
  const { galleryOpen, galleryImages, galleryIndex } = state;

  const setImageArr = (galleryImages: any) => {
    const normalizedImageArr = () =>
      galleryImages.map((image: any) => ({
        src: image.event_picture.url,
        width: image.event_picture.dimensions.width,
        height: image.event_picture.dimensions.height,
      }));
    setState({ ...state, galleryImages: normalizedImageArr() });
  };

  const handleClickPrev = () => {
    const { galleryIndex } = state;
    setState({ ...state, galleryIndex: galleryIndex - 1 });
  };

  const handleClickNext = () => {
    const { galleryIndex } = state;
    setState({ ...state, galleryIndex: galleryIndex + 1 });
  };

  const handleOpen = () => {
    setState({ ...state, galleryOpen: true, galleryIndex: 0 });
  };

  const handleClose = () => {
    setState({ ...state, galleryOpen: false, galleryIndex: 0 });
  };

  return (
    <Events
      {...{
        events,
        speakers,
        galleryOpen,
        galleryImages,
        galleryIndex,
      }}
      handleClickPrev={handleClickPrev}
      handleClickNext={handleClickNext}
      setImageArr={setImageArr}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};

export default EventsContainer;
