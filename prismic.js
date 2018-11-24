import PrismicLib from 'prismic-javascript';
import PrismicConfig from './prismic-configuration.json';

const ACCESS_TOKEN = process.env.PRISMIC_ACCESS_TOKEN;
console.log(ACCESS_TOKEN)

const Client = (req = null) => {
  const options = Object.assign(
    {},
    req ? { req } : {},
    ACCESS_TOKEN ? { accessToken: ACCESS_TOKEN } : {},
  );

  return PrismicLib.client(PrismicConfig.apiEndpoint, options);
};

const Prismic = PrismicLib;

export { Client, Prismic };
