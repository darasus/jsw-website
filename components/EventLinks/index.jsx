import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const EventLinks = ({
  meetupLink, slidesLink, eventPictures, setImageArr, handleOpen,
}) => (
  <S.Links>
    {meetupLink.url && (
      <S.Link href={meetupLink.url} target="_blank">
        <S.LinkIcon src="/static/img/meetup.svg" />
        {'Meetup'}
      </S.Link>
    )}
    {slidesLink.url && (
      <S.Link href={slidesLink.url} target="_blank">
        <S.LinkIcon src="/static/img/slides.svg" />
        {'Slides'}
      </S.Link>
    )}
    {!!eventPictures.length && (
      <S.Link
        onClick={() => {
          setImageArr(eventPictures);
          handleOpen();
        }}
        target="_blank"
      >
        <S.LinkIcon src="/static/img/instagram.svg" />
        {'Photos'}
      </S.Link>
    )}
  </S.Links>
);

EventLinks.propTypes = {
  meetupLink: PropTypes.oneOfType([PropTypes.object]).isRequired,
  slidesLink: PropTypes.oneOfType([PropTypes.object]).isRequired,
  eventPictures: PropTypes.oneOfType([PropTypes.array]).isRequired,
  setImageArr: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default EventLinks;
