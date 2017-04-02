import { ObjectID } from 'mongoose';
import jwt from 'jsonwebtoken';
import User from '../../server/api/mythology/model/user-model';
import secret from '../../server/constants/secret';

const aphroditeId = new ObjectID();
const artemisId = new ObjectID();

const users = [{
  _id: aphroditeId,
  email: 'aphrodite@mythology.com',
  password: 'aphrodite',
  tokens: [{
    access: 'auth',
    token: jwt.sign({ _id: aphroditeId, access: 'auth' }, secret).toString()
  }]
},
  {
    _id: artemisId,
    email: 'artemis@mythology.com',
    password: 'artemis',
  }
];

const populateUsers = (done) => {
  User.remove({}).then(() => {
    const aphrodite = new User(users[0]).save();
    const artemis = new User(users[1]).save();

    return Promise.all([aphrodite, artemis]);
  }).then(() => done());
}