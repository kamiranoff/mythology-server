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
      .exec((err, figures) => {
        if (err) {
          console.warn(err);
          reject(err)
        } else {
          resolve(figures);
        }
      });
  });
};

mythologyFigureSchema.statics.getSingle = (id) => {
  return new Promise((resolve, reject) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return reject(new TypeError('is not a valid id.'));
    }
    //const _query = {};
    const _query = {
      category: { $in: TEMP_CATEGORIES },
      '$and': [{
        "_id": id,
      }]
    };

    Greek
      .findOne(_query)
      .sort({ name: 1 })
      .exec((err, figure) => {
        if (err) {
          console.warn(err);
          reject(err)
        } else {
          resolve(figure);
        }
      });
  });
};

mythologyFigureSchema.statics.getFilteredList = (search) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(search)) {
      return reject(new TypeError('is not a valid string.'));
    }
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
      .exec((err, figures) => {
        if (err) {
          console.warn(err);
          reject(err)
        } else {
          resolve(figures);
        }
      });
  });
};

var Greek = mongoose.model('Greek', mythologyFigureSchema, 'allfigures');

export default Greek;
