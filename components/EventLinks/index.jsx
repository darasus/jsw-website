import React from 'react';
import PropTypes from 'prop-types';

import { LinksStyled, LinkStyled, LinkIconStyled } from './styles';

const EventLinks = ({
  meetupLink, slidesLink, eventPictures, setImageArr, handleOpen,
}) => (
  <LinksStyled>
    {meetupLink.url && (
      <LinkStyled href={meetupLink.url} target="_blank">
        <LinkIconStyled src="/static/img/meetup.svg" />
        {'Meetup'}
      </LinkStyled>
    )}
    {slidesLink.url && (
      <LinkStyled href={slidesLink.url} target="_blank">
        <LinkIconStyled src="/static/img/slides.svg" />
        {'Slides'}
      </LinkStyled>
    )}
    {!!eventPictures.length && (
      <LinkStyled
        onClick={() => {
          setImageArr(eventPictures);
          handleOpen();
        }}
        target="_blank"
      >
        <LinkIconStyled src="/static/img/instagram.svg" />
        {'Photos'}
      </LinkStyled>
    )}
  </LinksStyled>
);

EventLinks.propTypes = {
  meetupLink: PropTypes.oneOfType([PropTypes.object]).isRequired,
  slidesLink: PropTypes.oneOfType([PropTypes.object]).isRequired,
  eventPictures: PropTypes.oneOfType([PropTypes.array]).isRequired,
  setImageArr: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default EventLinks;
