import UserDao from '../dao/user-dao';

class UserMiddleware {
  static authenticate(req, res, next) {
    const token = req.header('x-auth');
    UserDao
      .findByToken(token)
      .then(user => {
        if (!user) {
          return Promise.reject('No user found')
        }
        req.user = user;
        req.token = token;
        next();
      })
      .catch(error => res.status(401).json(error))
  }
}

export default UserMiddleware;
