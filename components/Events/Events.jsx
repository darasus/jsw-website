import React from 'react';
import styled from 'styled-components';

import { GREY, RED, TWITTER } from '../../contants/colors';
import { SectionStyled, SectionTitleStyled } from '../../styles/styles';

const EventsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
`;
const EventStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 30px;
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
`;
const EventSpeakerImageStyled = styled.div`
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
`;
const EventSpeakerTwitterStyled = styled.span`
  color: ${TWITTER};
`;

class Events extends React.Component {
  state = {
    loading: true,
    events: [],
  };

  componentDidMount = async () => {
    const fetchedEvents = await fetch('/static/data/events.json');
    const events = await fetchedEvents.json();
    this.setState({
      events: events.data,
      loading: false,
    });
  };

  render = () => {
    const { loading, events } = this.state;
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
            <EventsContainerStyled>
              {events.map(({
                eventName, eventDesc, eventDate, speaker,
              }) => (
                <EventStyled key={eventName}>
                  <EventSpeakerStyled>
                    <EventSpeakerImageStyled
                      image={`/static/img/${speaker.firstName.toLowerCase()}.jpg`}
                    />
                    <EventSpeakerNameStyled>
                      {`${speaker.firstName} ${speaker.lastName}`}
                    </EventSpeakerNameStyled>
                    <EventSpeakerTwitterStyled>
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
                </EventStyled>
              ))}
            </EventsContainerStyled>
          );
        })()}
      </SectionStyled>
    );
  };
}

export default Events;
