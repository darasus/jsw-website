const PURPLE = '#C678DD';
const YELLOW = '#E5C07B';
const RED = '#e06c75';
const LIGHT_GREY = '#f5f5f5';
const GREY = '#ABB2BF';
const GREEN = '#98C379';
const DARK_BLUE = '#292d35';

const WHITE = '#FFFFFF';
const TWITTER_COLOR = '#1DA1F2';
const MEETUP_COLOR = '#ED1C40';
const SLIDES_COLOR = '#E4637C';
const INSTAGRAM_COLOR = '#E4405F';

const CLOUDINARY_URL = 'https://res.cloudinary.com/dkiskcxrh/image/fetch/';

const socialChannels = [
  {
    name: 'email',
    color: '#D14836',
    link: 'mailto:hi@jsw.wtf',
  },
  {
    name: 'telegram',
    color: '#2CA5E0',
    link: 'https://t.me/jsw_wtf',
  },
  {
    name: 'meetup',
    color: '#ED1C40',
    link: 'https://www.meetup.com/javascript-workshops-amsterdam/',
  },
  {
    name: 'slack',
    color: '#56B68B',
    link: 'https://bit.ly/2xf9Vfc',
  },
];

const breakpoint = {
  large: 800,
};

const ENDPOINT_EVENTS = 'https://javascript-workshops.prismic.io/api/v2/documents/search?ref=XFb5PxEAACEAHRyD&q=%5B%5Bat(document.type%2C+%22event%22)%5D%5D&format=json';
const ENDPOINT_SPEAKERS = 'https://javascript-workshops.prismic.io/api/v2/documents/search?ref=XFb5PxEAACEAHRyD&q=%5B%5Bat(document.type%2C+%22speaker%22)%5D%5D&format=json';

export {
  PURPLE,
  YELLOW,
  RED,
  LIGHT_GREY,
  GREY,
  GREEN,
  DARK_BLUE,
  WHITE,
  TWITTER_COLOR,
  MEETUP_COLOR,
  SLIDES_COLOR,
  INSTAGRAM_COLOR,
  CLOUDINARY_URL,
  socialChannels,
  breakpoint,
  ENDPOINT_EVENTS,
  ENDPOINT_SPEAKERS,
};
