export const PURPLE = '#C678DD';
export const YELLOW = '#E5C07B';
export const RED = '#e06c75';
export const LIGHT_GREY = '#f5f5f5';
export const GREY = '#ABB2BF';
export const GREEN = '#98C379';
export const DARK_BLUE = '#292d35';

export const WHITE = '#FFFFFF';
export const TWITTER_COLOR = '#1DA1F2';
export const MEETUP_COLOR = '#ED1C40';
export const SLIDES_COLOR = '#E4637C';
export const INSTAGRAM_COLOR = '#E4405F';

export const CLOUDINARY_URL =
  'https://res.cloudinary.com/dkiskcxrh/image/fetch/';

export const socialChannels = [
  {
    name: 'email',
    color: '#D14836',
    link: 'mailto:hi@jsw.wtf',
  },
  {
    name: 'meetup',
    color: '#ED1C40',
    link: 'https://www.meetup.com/javascript-workshops-amsterdam/',
  },
];

export const breakpoint = {
  large: 800,
};

export const ENDPOINT_EVENTS =
  'https://javascript-workshops.prismic.io/api/v2/documents/search?ref=XT6QghIAAG7kWXL1&q=%5B%5Bat(document.type%2C+%22event%22)%5D%5D&format=json';
export const ENDPOINT_SPEAKERS =
  'https://javascript-workshops.prismic.io/api/v2/documents/search?ref=XT6QghIAAG7kWXL1&q=%5B%5Bat(document.type%2C+%22speaker%22)%5D%5D&format=json';
