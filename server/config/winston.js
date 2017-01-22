import winston from 'winston';

const logger = new (winston.Logger)({
  level: 'warn',
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    })
  ]
});

export default logger;