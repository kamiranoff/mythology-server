import mongoose from 'mongoose';
import BookSchema from '../model/book-model';

BookSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    const _query = '';
    Book
      .find(_query)
      .sort({ name: 1 })
      .exec((err, books) => {
        err ? reject(err)
          : resolve(books);
      });
  });
};

const Book = mongoose.model('Book', BookSchema, 'books');

export default Book;
