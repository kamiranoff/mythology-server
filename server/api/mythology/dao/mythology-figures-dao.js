import mongoose from 'mongoose';
import Promise from 'bluebird';
import mythologyFigureSchema from '../model/mythology-figure-model';
import _ from 'lodash';

mythologyFigureSchema.statics.getAll = () => {
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

mythologyFigureSchema.statics.getFilteredList = (search) => {
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

var Greek = mongoose.model('Greek', mythologyFigureSchema, 'allfigures');

export default Greek;
