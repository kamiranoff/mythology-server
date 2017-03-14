import MythologyController from '../controller/mythology-controller';
import UserController from '../controller/user-controller';

export default class MythologyRoutes {
  static init(router) {
    router
      .route('/api/figures/:id?')
      .get(MythologyController.getFigures)
      .patch(MythologyController.patchFigure);

    router
      .route('/api/books')
      .get(MythologyController.getBooks);

    router
      .route('/api/quotes/:id?')
      .get(MythologyController.getQuotes)
      .patch(MythologyController.updateQuote);

    router
      .route('/api/quotes/random')
      .get(MythologyController.getRandomQuote);

    router
      .route('/api/users/signup')
      .post(UserController.signUp);

    router
      .route('/api/users/signin')
      .post(UserController.signIn);
  }
}
