import MythologyRoutes from '../api/mythology/routes/mythology-routes';

export default class Routes {
   static init(app, router) {
     MythologyRoutes.init(router);

     app.use('/', router);
   }
}
