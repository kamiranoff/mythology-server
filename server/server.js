import os from 'os';
import express from 'express';
import http from 'http';
import cors from 'cors';
import SwaggerConfig from './config/swagger.conf';
import RoutesConfig from './config/routes.conf';
import DBConfig from './config/db.conf';
import Routes from './routes/index';

const env = process.env.NODE_ENV || 'development';

if (env === 'production')
  require('newrelic');

if(env === 'test') {
  process.env.PORT = 4444;
}

const PORT = process.env.PORT || 3333;
const app = express();

if(env !== 'PRODUCTION') {
  app.use(cors());
}

SwaggerConfig.init(app);
RoutesConfig.init(app);
DBConfig.init();
Routes.init(app, express.Router());

http.createServer(app)
  .listen(PORT, () => {
    console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
    console.log(`enviroment: ${env}`);
  });

export default app;
