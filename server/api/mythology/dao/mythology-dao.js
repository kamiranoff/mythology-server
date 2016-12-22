import mongoose from 'mongoose';
import Promise from 'bluebird';
import mythologySchema from '../model/mythology-model';

mythologySchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    var _query = {};

    Greek
    .find(_query)
    .exec((err, greeks) => {
      err ? reject(err)
      : resolve(greeks);
    });
  });
};

var Greek = mongoose.model('Greek', mythologySchema, 'majorolympians');

export default Greek;
