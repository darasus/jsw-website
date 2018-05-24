import Head from 'next/head';

const Index = () => (
  <>
    <Head>
      <title>JavaScript Wprkshops | jsw</title>
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Sans"
        rel="stylesheet"
      />
    </Head>
    <section className="intro">
      <div className="intro-text">
        <span style={{ color: '#C678DD' }}>const</span>{' '}
        <span style={{ color: '#E5C07B' }}>js</span>
        <span style={{ color: '#E06C75' }}>w</span>{' '}
        <span style={{ color: '#ABB2BF' }}>=</span>{' '}
        <span style={{ color: '#98C379' }}>'JavaScript Workshops'</span>
      </div>
    </section>
    <div className="content">
      <section>
        <h2>
          Wtf is <span style={{ color: '#E5C07B' }}>js</span>
          <span style={{ color: '#E06C75' }}>w</span>?
        </h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
          nulla gravida, congue libero in, semper urna. Proin hendrerit feugiat
          arcu, vel sollicitudin dui gravida a. Sed urna arcu, feugiat at tortor
          vitae, cursus pellentesque est. Nunc dignissim euismod augue vel
          tincidunt. Sed pharetra dapibus lorem, sit amet lacinia turpis
          bibendum at. Donec blandit commodo dapibus. Ut volutpat rutrum orci,
          nec iaculis dui aliquet ut. Nam pellentesque nisl laoreet, lacinia
          tellus elementum, euismod ex. Vestibulum at gravida sem. Sed eleifend
          porttitor enim sit amet dictum. Vivamus venenatis magna ultricies orci
          dictum lacinia. In ante nibh, feugiat vel tristique eget, fermentum
          sed tortor. Nunc tempus purus id erat molestie, a placerat sem
          accumsan.
        </span>
      </section>
    </div>
    <style global jsx>{`
      body {
        padding: 0;
        margin: 0;
        font-family: 'Fira Sans', sans-serif;
        color: #000;
      }
      h1 {
        font-family: 'Fira Code', sans-serif;
        font-weight: normal;
        font-size: 50px;
      }
      h2 {
        font-family: 'Fira Code', sans-serif;
        font-weight: normal;
        font-size: 40px;
        margin: 0 0 20px;
      }
      .content {
        width: 90%;
        max-width: 700px;
        margin: 0 auto;
      }
      section {
        margin-bottom: 100px;
      }
    `}</style>
    <style jsx>{`
      .intro {
        height: 70vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #282d35;
        overflow: hidden;
      }
      .intro-text {
        font-family: 'Fira Code', sans-serif;
        font-size: 30px;
        font-weight: normal;
        margin: 0;
      }
      .desc {
        color: #fff;
      }
    `}</style>
  </>
);

export default Index;
