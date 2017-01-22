import mongoose from 'mongoose';
import mythologyBookSchema from '../model/mythology-book-model';

mythologyBookSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    var _query = '';
    Book
      .find(_query)
      .sort({ name: 1 })
      .exec((err, books) => {
        err ? reject(err)
          : resolve(books);
      });
  });
};

var Book = mongoose.model('Book', mythologyBookSchema, 'books');

export default Book;
