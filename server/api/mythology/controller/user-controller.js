import UserDao from '../dao/user-dao';
import _ from 'lodash';

export default class UserController {
  static signUp(req, res) {
    UserDao
      .signUp(req.body)
      .then((payload) => {
        return res
          .header('x-auth', payload.token)
          .status(200)
          .json(payload.curatedUser)
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  }

  static signIn(req, res) {
    UserDao
      .signIn(req.body)
      .then((user) => {
        return res.header('x-auth', user.token)
          .status(200)
          .json(user.curatedUser);
      })
      .catch(error => {
        console.log('error', error);
        res.status(400).json(error);
      });
  }
};
