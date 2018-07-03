import Head from 'next/head';
import css from 'styled-jsx/css';

const globalStyles = css`
  body {
    padding: 0;
    margin: 0;
    font-family: Fira Sans, sans-serif;
    color: #000;
  }
  h1 {
    font-family: Fira Code, sans-serif;
    font-weight: normal;
    font-size: 50px;
  }
  h2 {
    font-family: Fira Code, sans-serif;
    font-weight: normal;
    font-size: 40px;
    margin: 0 0 20px;
  }
  .content {
    width: 90%;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const indexStyles = css`
  .intro {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #282d35;
    overflow: hidden;
  }
  .intro-content {
    width: 80%;
    text-align: left;
  }
  .intro-text {
    font-family: Fira Code, sans-serif;
    font-size: 24px;
    font-weight: normal;
    margin: 0 0 10px 0;
  }
  .comment-text {
    font-family: Fira Code, sans-serif;
    font-size: 24px;
    font-weight: normal;
    margin: 0 0 10px 0;
  }
  .link {
    text-decoration: underline;
    cursor: pointer;
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
    <section className="intro">
      <div className="intro-content">
        <div className="intro-text">
          <span style={{ color: '#C678DD' }}>const</span>{' '}
          <span style={{ color: '#E5C07B' }}>js</span>
          <span style={{ color: '#E06C75' }}>w</span>{' '}
          <span style={{ color: '#ABB2BF' }}>=</span>{' '}
          <span style={{ color: '#98C379' }}>'JavaScript Workshops'</span>
        </div>
        <div className="comment-text">
          <span style={{ color: '#ABB2BF' }}>//</span>{' '}
          <span style={{ backgroundColor: '#E5C07B', color: '#fff' }}>
            TODO:
          </span>{' '}
          <span style={{ color: '#ABB2BF' }}>build website</span>
        </div>
        <div className="comment-text">
          <span style={{ color: '#ABB2BF' }}>//</span>{' '}
          <span style={{ color: '#ABB2BF' }}>coming soon...</span>
        </div>
        <div className="comment-text">
          <span style={{ color: '#ABB2BF' }}>//</span>{' '}
          <span style={{ backgroundColor: '#98C379', color: '#fff' }}>
            INFO:
          </span>{' '}
          <span style={{ color: '#ABB2BF' }}>in the meantime join our</span>{' '}
          <span
            onClick={() =>
              window.open(
                'https://www.meetup.com/javascript-workshops-amsterdam/',
                '_blank',
              )
            }
            className="link"
            style={{ color: '#ED1C40' }}>
            meetup group
          </span>{' '}
          <span style={{ color: '#ABB2BF' }}>or</span>{' '}
          <span
            onClick={() => window.open('https://bit.ly/2xf9Vfc', '_blank')}
            className="link"
            style={{ color: '#56B68B' }}>
            slack channel
          </span>
        </div>
      </div>
    </section>
    <style global jsx>
      {globalStyles}
    </style>
    <style jsx>{indexStyles}</style>
  </>
);

export default Index;
