import mongoose from 'mongoose';
import FigureSchema from '../model/figure-model';
import _ from 'lodash';

const TEMP_CATEGORIES = ["major olympian", "twelve titan", "primordial deity"];

FigureSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    //const _query = {};
    const _query = { category: { $in: TEMP_CATEGORIES } };

    Figure
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

FigureSchema.statics.getSingle = (id) => {
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

    Figure
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

FigureSchema.statics.patchFigure = (id, body) => {
  return new Promise((resolve, reject) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return reject(new TypeError('is not a valid id.'));
    }

    const _query = {
      category: { $in: TEMP_CATEGORIES },
      '$and': [{
        "_id": id,
      }]
    };

    const options = {
      new: true,
    };

    Figure.find(_query)
      .findOneAndUpdate(_query, body, options)
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

FigureSchema.statics.getFilteredList = (search) => {
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

    Figure
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

const Figure = mongoose.model('Figure', FigureSchema, 'allfigures');

export default Figure;
