import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { LIGHT_GREY, RED } from '../../constants/colors';

const LinksStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
`;
const LinkStyled = styled.a`
  display: flex;
  height: 35px;
  padding: 0 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  align-items: center;
  color: ${RED};
  background-color: ${LIGHT_GREY};
  cursor: pointer;
  text-decoration: underline;
`;
const LinkIconStyled = styled.img`
  display: block;
  height: 17px;
  margin-right: 10px;
  opacity: 0.5;
`;

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
