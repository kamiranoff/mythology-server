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
          .json(payload)
      })
      .catch(error => {
        res.status(400).json({ error: error.message });
      });
  }

  static signIn(req, res) {
    if (req.body.token) {
      UserDao
        .findByToken(req.body.token)
        .then((payload) => {
          return res
            .header('x-auth', payload.token)
            .status(200)
            .json(payload)
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
    } else {
      // NOT IMPLEMENTED YET !!!
      UserDao
        .signIn(req.body)
        .then((payload) => {
          return res
            .header('x-auth', payload.token)
            .status(200)
            .json(payload)
        })
        .catch(error => {
          res.status(400).json({ error: error.message });
        });
    }
  }
};
