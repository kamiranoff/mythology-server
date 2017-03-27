import UserDao from '../dao/user-dao';

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

  static me(req, res) {
      UserDao
        .me(req.user)
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json(error));
  }
};
