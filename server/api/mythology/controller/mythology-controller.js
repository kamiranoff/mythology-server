import MythologyDAO from '../dao/mythology-dao';
import MythologyBooksDAO from '../dao/mythology-books-dao';
import MythologyQuotesDAO from '../dao/mythology-quotes-dao';

export default class MythologyController {
  static getAll(req, res) {
    if (req.query.search) {
      MythologyDAO
        .getFilteredList(req.query.search)
        .then(greeks => res.status(200).json(greeks))
        .catch(error => res.status(400).json(error));
    } else {
      MythologyDAO
        .getAll()
        .then(greeks => res.status(200).json(greeks))
        .catch(error => res.status(400).json(error));
    }
  }

  static getBooks(req, res) {
    MythologyBooksDAO
      .getAll()
      .then(greeks => res.status(200).json(greeks))
      .catch(error => res.status(400).json(error));
  }

  static getRandomQuote(req, res) {
    MythologyQuotesDAO
      .getRandomQuote()
      .then(quote => res.status(200).json(quote))
      .catch(error => res.status(400).json(error));
  }
};
