import Head from 'next/head';
import css from 'styled-jsx/css';

import Intro from '../components/Intro/Intro';
import Members from '../components/Members/Members';
import { DARK_BLUE } from '../contants/colors';

const globalStyles = css`
  body {
    padding: 0;
    margin: 0;
    font-family: Fira Code, sans-serif;
    color: ${DARK_BLUE};
  }
  h1 {
    font-family: Fira Code, sans-serif;
    font-weight: bold;
    font-size: 50px;
  }
  h2 {
    font-family: Fira Code, sans-serif;
    font-weight: bold;
    font-size: 40px;
    margin: 0 0 40px;
  }
  .content {
    width: 90%;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const Index = () => (
  <>
    <Head>
      <title>JavaScript Workshops | JSW</title>
      <link rel="icon" type="image/png" href="/static/img/favicon.png" />
      <link
        href="https://unpkg.com/firacode/distr/fira_code.css"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Intro />
    <Members />
    <style global jsx>
      {globalStyles}
    </style>
  </>
);

export default Index;
