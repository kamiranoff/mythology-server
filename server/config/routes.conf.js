import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import express from 'express';
import compression from 'compression';
import zlib from 'zlib';
import expressWinston from 'express-winston';
import winstonInstance from './winston';


export default class RouteConfig {
  static init(application) {
    let _root = process.cwd();
    let _nodeModules = '/node_modules/';
    let _clientFiles = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';

    application.use(compression({
      level: zlib.Z_BEST_COMPRESSION,
      threshold: '1kb'
    }));

    // enable detailed API logging in dev env
    if (process.env.NODE_ENV !== 'production') {
      expressWinston.requestWhitelist.push('body');
      expressWinston.responseWhitelist.push('body');
      application.use(expressWinston.logger({
        winstonInstance,
        meta: true, // optional: log meta data about request (defaults to true)
        msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
        colorStatus: true // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
      }));
    }

    application.use(express.static(_root + _nodeModules));
    application.use(express.static(_root + _clientFiles));
    application.use(bodyParser.json({limit: '50mb'}));
    application.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    application.use(morgan('dev'));
    application.use(helmet());
  }
}
