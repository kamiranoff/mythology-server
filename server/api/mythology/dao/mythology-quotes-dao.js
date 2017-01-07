import mongoose from 'mongoose';
import Promise from 'bluebird';
import _ from 'lodash';

import mythologyQuoteSchema from '../model/mythology-quote-model';

mythologyQuoteSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    var _query = '';
    Quote
      .find(_query)
      .exec((err, books) => {
        err ? reject(err)
          : resolve(books);
      });
  });
};

mythologyQuoteSchema.statics.getAllInRandomOrder = (random) => {
  if (!_.isString(random)) {
    return reject(new TypeError('is not a valid string.'));
  }
  return new Promise((resolve, reject) => {
    var _query = '';
    Quote
      .find(_query)
      .exec((err, books) => {
        err ? reject(err)
          : resolve(books);
      });
  });
};


mythologyQuoteSchema.statics.getRandomQuote = () => {
  return new Promise((resolve, reject) => {
    Quote.count().exec((err, count) => {
      const random = Math.floor(Math.random() * count);
      Quote
        .findOne().skip(random)
        .exec((error, quote) => {
          if (error) {
            reject(error);
          } else {
            resolve(quote);
          }
        });
    });
  });
};

var Quote = mongoose.model('Quote', mythologyQuoteSchema, 'quotes');

export default Quote;
