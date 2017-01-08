if (process.env.NODE_ENV === 'production')
  require('newrelic');

const PORT = process.env.PORT || 3333;

import os from 'os';
import express from 'express';
import http from 'http';
import RoutesConfig from './config/routes.conf';
import DBConfig from './config/db.conf';
import Routes from './routes/index';

const app = express();

const swaggerUi = require('swagger-ui-express');
var swaggerJSDoc = require('swagger-jsdoc');

var options = {
  swaggerDefinition: {
    info: {
      title: 'Greek Mythology Api', // Title (required)
      version: '1.0.0', // Version (required)
    },
  },
  apis: [__dirname + '/api/mythology/routes/mythology-routes.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec, true));




RoutesConfig.init(app);
DBConfig.init();
Routes.init(app, express.Router());

http.createServer(app)
  .listen(PORT, () => {
    console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
    console.log(`enviroment: ${process.env.NODE_ENV}`);
  });
