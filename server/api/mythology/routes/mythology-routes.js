import FiguresController from '../controller/figures-controller';
import UserController from '../controller/user-controller';
import BooksController from '../controller/books-controller';
import QuotesController from '../controller/quotes-controller';

export default class MythologyRoutes {
  static init(router) {
    router
      .route('/api/figures/:id?')
      .get(FiguresController.getFigures)
      .patch(FiguresController.patchFigure);

    router
      .route('/api/books')
      .get(BooksController.getBooks);

    router
      .route('/api/quotes/:id?')
      .get(QuotesController.getQuotes)
      .patch(QuotesController.updateQuote);

    router
      .route('/api/quotes/random')
      .get(QuotesController.getRandomQuote);

    router
      .route('/api/users/signup')
      .post(UserController.signUp);

    router
      .route('/api/users/signin')
      .post(UserController.signIn);
  }
}
