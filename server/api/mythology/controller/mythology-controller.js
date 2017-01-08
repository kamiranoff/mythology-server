import MythologyFiguresDAO from '../dao/mythology-figures-dao';
import MythologyBooksDAO from '../dao/mythology-books-dao';
import MythologyQuotesDAO from '../dao/mythology-quotes-dao';

import Helpers from '../../../helpers/Helpers';
export default class MythologyController {
  static getFigures(req, res) {
    if (req.query.search) {
      MythologyFiguresDAO
        .getFilteredList(req.query.search)
        .then(greeks => res.status(200).json(greeks))
        .catch(error => res.status(400).json(error));
    } else {
      MythologyFiguresDAO
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

  static getQuotes(req, res) {
    if (req.query.random === 'true') {
      MythologyQuotesDAO
        .getAllInRandomOrder(req.query.random)
        .then(quotes => {
          const quotesRandomOrder = Helpers.shuffle(quotes);
          return res.status(200).json(quotesRandomOrder)
        })
        .catch(error => res.status(400).json(error));
    } else {
      MythologyQuotesDAO
        .getAll()
        .then(quotes => res.status(200).json(quotes))
        .catch(error => res.status(400).json(error));
    }
  }

  static getRandomQuote(req, res) {
    MythologyQuotesDAO
      .getRandomQuote()
      .then(quote => res.status(200).json(quote))
      .catch(error => res.status(400).json(error));
  }
};
