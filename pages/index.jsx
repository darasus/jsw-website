import React, { Fragment } from 'react';
import Head from 'next/head';
import { injectGlobal } from 'styled-components';

import Intro from '../components/Intro/Intro';
import Members from '../components/Members/Members';
import Events from '../components/Events/Events';

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: Fira Code, sans-serif;
    color: #292d35;
  }
`;

const Index = () => (
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
    <Members />
    <Events />
  </Fragment>
);

export default Index;
