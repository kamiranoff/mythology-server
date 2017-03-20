import mongoose from 'mongoose';
import _ from 'lodash';

import QuoteSchema from '../model/quote-model';

QuoteSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    const _query = '';
    Quote
      .find(_query)
      .exec((err, books) => {
        err ? reject(err)
          : resolve(books);
      });
  });
};

QuoteSchema.statics.getAllInRandomOrder = (random) => {
  if (!_.isString(random)) {
    return reject(new TypeError('is not a valid string.'));
  }
  return new Promise((resolve, reject) => {
    const _query = '';
    Quote
      .find(_query)
      .exec((err, books) => {
        err ? reject(err)
          : resolve(books);
      });
  });
};


QuoteSchema.statics.getRandomQuote = () => {
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

QuoteSchema.statics.updateQuote = (id, body) => {
  const options = {
    new: true,
    upsert: false
  };

  if (!id || !body.likes) {
    throw new Error('either no id or no likes');
  }

  return new Promise((resolve, reject) => {
    Quote
      .findOneAndUpdate({ _id: id }, body, options)
      .exec((err, quote) => {
        if (err) {
          console.log(err);
          reject(err)
        } else {
          console.log(quote);
          resolve(quote);
        }
      });
  });
}

const Quote = mongoose.model('Quote', QuoteSchema, 'quotes');

export default Quote;
