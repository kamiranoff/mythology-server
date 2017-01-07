import MythologyController from '../controller/mythology-controller';

export default class MythologyRoutes {
  static init(router) {
    router
      .route('/api/all')
      .get(MythologyController.getFigures);

    router
      .route('/api/books')
      .get(MythologyController.getBooks);


    router
      .route('/api/quotes')
      .get(MythologyController.getQuotes);

    router
      .route('/api/quotes/random')
      .get(MythologyController.getRandomQuote);

  }
}
