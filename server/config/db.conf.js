import mongoose from 'mongoose';
import dbConst from '../constants/db.json';

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

export default class DBConfig {
  static init() {
    const env = process.env.NODE_ENV;
    let URL = dbConst.localhost;

    if (env === 'test') {
      URL = dbConst.test;
    } else if (env === 'production') {
      URL = process.env.MONGOHQ_URL;
    }

    mongoose.connect(URL);
    mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));
  }
};
