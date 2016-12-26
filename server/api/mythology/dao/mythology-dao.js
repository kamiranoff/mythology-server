import mongoose from 'mongoose';
import Promise from 'bluebird';
import mythologySchema from '../model/mythology-model';
import _ from 'lodash';
mythologySchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    var _query = '';

    Greek
      .find(_query)
      .sort({ name: 1 })
      .exec((err, greeks) => {
        err ? reject(err)
          : resolve(greeks);
      });
  });
};

mythologySchema.statics.getFilteredList = (search) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(search)) {
      return reject(new TypeError('is not a valid string.'));
    }
    let _query = {'$or':[{"name": { "$regex": search, "$options": "i" }},{ "category": { "$regex": search, "$options": "i" }}]};
    Greek
      .find(_query)
      .sort({ name: 1 })
      .exec((err, greeks) => {
        err ? reject(err)
          : resolve(greeks);
      });
  });
};

var Greek = mongoose.model('Greek', mythologySchema, 'allfigures');

export default Greek;
