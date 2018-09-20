import React, { Fragment } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { injectGlobalStyles } from '../styles/styles';
import { Client, Prismic } from '../prismic';
import Intro from '../components/Intro/Intro';
import Members from '../components/Members/Members';
import Events from '../components/Events/Events';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';

const Index = ({ events, speakers }) => (
  <Fragment>
    <Head>
      <title>
        {'JavaScript Workshops | JSW'}
      </title>
      <link rel="icon" type="image/png" href="/static/img/favicon.png" />
      <link href="https://unpkg.com/firacode/distr/fira_code.css" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Intro />
    <Members speakers={speakers} />
    <Events events={events} speakers={speakers} />
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
      events: events.results,
      speakers: speakers.results,
    };
  } catch (error) {
    return { error };
  }
};

Index.propTypes = {
  events: PropTypes.oneOfType([PropTypes.array]).isRequired,
  speakers: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Index;
