import mongoose from 'mongoose';
import Promise from 'bluebird';
import mythologyQuoteSchema from '../model/mythology-quote-model';

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


var Quote = mongoose.model('Quote', mythologyQuoteSchema, 'quotes');

export default Quote;
