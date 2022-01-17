import 'dotenv/config';

export default {
  DATABASE_URL: process.env.SWAPI_DATABASE_PROD_URL,
  HOST: process.env.SWAPI_APP_HOST,
  API_VERSION: process.env.SWAPI_VERSION,
};
