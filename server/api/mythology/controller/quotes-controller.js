import MythologyQuotesDAO from '../dao/mythology-quotes-dao';

import Helpers from '../../../helpers/Helpers';

class QuotesController {

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

  static updateQuote(req, res) {
    if (req.params.id) {
      MythologyQuotesDAO
        .updateQuote(req.params.id, req.body)
        .then(quote => res.status(200).json(quote))
        .catch(error => res.status(400).json(error));
    }
  }
};

export default QuotesController;