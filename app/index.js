/* eslint-disable no-undef */
import express from 'express';
import config, { initConfig } from './config';
import db from './db';

const app = express();
const host = config.HOST;
const port = config.PORT || 3033;
const apiVersion = config.API_VERSION || 'v1';

initConfig(app);

db.connect()
  .then((operation) => {
    app.listen(process.env.PORT || 5000, () => {
      operation.done();
      logger.info(`Server started at ${host}:${port}/api/${apiVersion}/`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    logger.error(error.message);
  });

export default app;
