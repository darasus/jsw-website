import React, { Fragment } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { injectGlobalStyles } from '../styles/styles';
import { Client, Prismic } from '../prismic';
import Intro from '../components/Intro/Intro';
import Members from '../components/Members/Members';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';
import EventsContainer from '../containers/EventsContainer';

const sortEvents = arr => arr.sort((a, b) => new Date(b.data.event_date) - new Date(a.data.event_date));

const Index = ({ events, speakers }) => (
  <Fragment>
    <Head>
      <title>
        {'JavaScript Workshops | JSW'}
      </title>
      <link rel="icon" type="image/png" href="/static/img/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Intro />
    <Members speakers={speakers} />
    <EventsContainer events={events} speakers={speakers} />
    <Subscribe />
    <Footer />
  </Fragment>
);

Index.getInitialProps = async ({ req }) => {
  injectGlobalStyles();
  try {
    const events = await Client(req).query(Prismic.Predicates.at('document.type', 'event'));
    const speakers = await Client(req).query(Prismic.Predicates.at('document.type', 'speaker'));
    return {
      events: sortEvents(events.results),
      speakers: speakers.results,
      error: {},
    };
  } catch (error) {
    return { speakers: [], events: [], error };
  }
};

Index.propTypes = {
  events: PropTypes.oneOfType([PropTypes.array]).isRequired,
  speakers: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Index;
