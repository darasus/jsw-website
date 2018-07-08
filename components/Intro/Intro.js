import css from 'styled-jsx/css';

import { PURPLE, YELLOW, RED, GREY, GREEN } from '../../contants/colors';

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

const Intro = () => (
  <section className="intro">
    <div className="intro-content">
      <div className="intro-text">
        <span style={{ color: PURPLE }}>const</span>{' '}
        <span style={{ color: YELLOW }}>js</span>
        <span style={{ color: RED }}>w</span>{' '}
        <span style={{ color: GREY }}>=</span>{' '}
        <span style={{ color: GREEN }}>'JavaScript Workshops'</span>
      </div>
      <div className="comment-text">
        <span style={{ color: GREY }}>//</span>{' '}
        <span style={{ color: GREY }}>
          A series of mini-workshops about JavaScript and everything related
        </span>
      </div>
      <div />
    </div>
    <style jsx>{indexStyles}</style>
  </section>
);

export default Intro;
