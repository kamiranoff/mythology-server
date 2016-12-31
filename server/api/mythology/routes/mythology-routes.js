import MythologyController from '../controller/mythology-controller';

export default class MythologyRoutes {
  static init(router) {
    router
      .route('/api/all')
      .get(MythologyController.getAll);

    router
      .route('/api/books')
      .get(MythologyController.getBooks)
  }
}
