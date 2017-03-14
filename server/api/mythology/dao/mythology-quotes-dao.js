import mongoose from 'mongoose';
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

mythologyQuoteSchema.statics.updateQuote = (id, body) => {
  console.log(id, body);
  if(!id || !body.likes) {
    throw new Error('either no id or no likes');
  }

  return new Promise((resolve, reject) => {
    Quote
      .findOneAndUpdate(id, body, options)
      .exec((err, quote) => {
        if (err) {
          console.warn(err);
          reject(err)
        } else {
          resolve(quote);
        }
      });
  });
}

var Quote = mongoose.model('Quote', mythologyQuoteSchema, 'quotes');

export default Quote;
