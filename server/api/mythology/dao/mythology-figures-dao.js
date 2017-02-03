import mongoose from 'mongoose';
import mythologyFigureSchema from '../model/mythology-figure-model';
import _ from 'lodash';

const TEMP_CATEGORIES = ["major olympian", "twelve titan", "primordial deity"];

mythologyFigureSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    //const _query = {};
    const _query = { category: { $in: TEMP_CATEGORIES } };

    Greek
      .find(_query)
      .sort({ name: 1 })
      .exec((err, greeks) => {
        if (err) {
          console.warn(err);
          reject(err)
        } else {
          resolve(greeks);
        }
      });
  });
};

mythologyFigureSchema.statics.getFilteredList = (search) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(search)) {
      return reject(new TypeError('is not a valid string.'));
    }
    // const _query = {
    //   '$or': [{
    //     "name": {
    //       "$regex": search,
    //       "$options": "i"
    //     }
    //   }, {
    //     "category": {
    //       "$regex": search,
    //       "$options": "i"
    //     }
    //   }]
    // };

    const _query = {
      category: {
        $in: TEMP_CATEGORIES
      },
      '$or': [{
        "name": {
          "$regex": search,
          "$options": "i"
        }
      }, {
        "category": {
          "$regex": search,
          "$options": "i"
        }
      }]
    };

    Greek
      .find(_query)
      .sort({ name: 1 })
      .exec((err, greeks) => {
        if (err) {
          console.warn(err);
          reject(err)
        } else {
          resolve(greeks);
        }
      });
  });
};

var Greek = mongoose.model('Greek', mythologyFigureSchema, 'allfigures');

export default Greek;
