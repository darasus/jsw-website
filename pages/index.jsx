import React, { Fragment, Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

import Intro from '../components/Intro/Intro';
import Members from '../components/Members/Members';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';
import EventsContainer from '../containers/EventsContainer';
import { sortEvents } from '../utils';
import { ENDPOINT_EVENTS, ENDPOINT_SPEAKERS } from '../constants';

class Index extends Component {
  static async getInitialProps() {
    try {
      const eventsResponse = await fetch(ENDPOINT_EVENTS);
      const speakersResponse = await fetch(ENDPOINT_SPEAKERS);
      const events = await eventsResponse.json();
      const speakers = await speakersResponse.json();
      return {
        events: sortEvents(events.results),
        speakers: speakers.results,
        error: {},
      };
    } catch (error) {
      return { speakers: [], events: [], error };
    }
  }

  render() {
    const { speakers, events } = this.props;

    return (
      <Fragment>
        <Head>
          <title>JavaScript Workshops | JSW</title>
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <style jsx global>
          {`
            body {
              padding: 0;
              margin: 0;
              font-family: 'Courier', 'Andale Mono', 'Monaco', sans-serif;
              font-size: 1rem;
              color: #292d35;
            }
          `}
        </style>
        <Intro />
        <Members {...{ speakers }} />
        <EventsContainer {...{ events, speakers }} />
        <Subscribe />
        <Footer />
      </Fragment>
    );
  }
}

Index.propTypes = {
  events: PropTypes.oneOfType([PropTypes.array]).isRequired,
  speakers: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Index;
