import React from 'react';
import styled from 'styled-components';
import GooglePhoto from '../GooglePhotos';

import {
  LIGHT_GREY,
  GREY,
  RED,
  TWITTER_COLOR,
  MEETUP_COLOR,
  SLIDES_COLOR,
  INSTAGRAM_COLOR,
} from '../../constants/colors';
import { SectionStyled, SectionTitleStyled, ContainerStyled } from '../../styles/styles';

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
const DividerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: ${GREY};
`;
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

class Events extends React.Component {
  state = {
    loading: true,
    events: [],
    galleryIndex: 0,
    galleryOpen: false,
    galleryImages: [{ src: '', width: 100, height: 100 }],
  };

  componentDidMount = async () => {
    const fetchedEvents = await fetch('/static/data/events.json');
    const events = await fetchedEvents.json();
    this.setState({
      events: events.data,
      loading: false,
    });
  };

  setImageArr = (galleryImages) => {
    this.setState({ galleryImages });
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

  render = () => {
    const {
      loading, events, galleryOpen, galleryImages, galleryIndex,
    } = this.state;
    return (
      <SectionStyled>
        <SectionTitleStyled>
          {'Events'}
        </SectionTitleStyled>
        {(() => {
          if (loading) {
            return (
              <span>
                {'Loading...'}
              </span>
            );
          }
          return (
            <ContainerStyled>
              {events.map(({
                eventName, eventDesc, eventDate, speaker, links,
              }, i) => {
                const { meetup: meetupLink, slides: slidesLink, photos } = links;
                return (
                  <div key={eventName}>
                    <EventStyled isFirst={i === 0}>
                      <EventSpeakerStyled>
                        <EventSpeakerImageStyled
                          image={`/static/img/${speaker.firstName.toLowerCase()}.jpg`}
                        />
                        <EventSpeakerNameStyled>
                          {`${speaker.firstName} ${speaker.lastName}`}
                        </EventSpeakerNameStyled>
                        <EventSpeakerTwitterStyled
                          href={`https://twitter.com/${speaker.twitterHandle}`}
                          target="_blank"
                        >
                          {`@${speaker.twitterHandle}`}
                        </EventSpeakerTwitterStyled>
                      </EventSpeakerStyled>
                      <EventNameStyled>
                        {eventName}
                        <span>
                          {` • ${eventDate}`}
                        </span>
                      </EventNameStyled>
                      <EventDescStyled>
                        {eventDesc}
                      </EventDescStyled>
                      <LinksStyled>
                        {meetupLink && (
                          <LinkStyled href={meetupLink} target="_blank">
                            <LinkIconStyled src="/static/img/meetup.svg" />
                            {'Meetup'}
                          </LinkStyled>
                        )}
                        {slidesLink && (
                          <LinkStyled href={slidesLink} target="_blank">
                            <LinkIconStyled src="/static/img/slides.svg" />
                            {'Slides'}
                          </LinkStyled>
                        )}
                        {photos && (
                          <LinkStyled
                            onClick={() => {
                              this.setImageArr(photos);
                              this.handleOpen();
                            }}
                            target="_blank"
                          >
                            <LinkIconStyled src="/static/img/instagram.svg" />
                            {'Photos'}
                          </LinkStyled>
                        )}
                      </LinksStyled>
                    </EventStyled>
                    {events.length - 1 === i ? null : (
                      <DividerStyled>
                        {'•'}
                      </DividerStyled>
                    )}
                  </div>
                );
              })}
            </ContainerStyled>
          );
        })()}
        {process.browser && (
          <GooglePhoto
            open={galleryOpen}
            src={galleryImages}
            srcIndex={galleryIndex}
            onClickPrev={this.handleClickPrev}
            onClickNext={this.handleClickNext}
            onClose={this.handleClose}
          />
        )}
      </SectionStyled>
    );
  };
}

export default Events;
