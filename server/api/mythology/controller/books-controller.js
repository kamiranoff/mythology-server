import MythologyBooksDAO from '../dao/mythology-books-dao';

class BooksController {

  static getBooks(req, res) {
    MythologyBooksDAO
      .getAll()
      .then(greeks => res.status(200).json(greeks))
      .catch(error => res.status(400).json(error));
  }

};

export default BooksController;
