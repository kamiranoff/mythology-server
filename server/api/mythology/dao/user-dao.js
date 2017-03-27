import mongoose from 'mongoose';
// Use native promises
import jwt from 'jsonwebtoken';
import _ from 'lodash';

import userSchema from '../model/user-model';

import { secret } from '../../../constants/secret.json';


// @FIXME: implement
userSchema.methods.handleError = function(e) {
};

// Using regular function to bind this.
userSchema.methods.generateAuthToken = function() {
  const user = this;
  const access = 'auth';
  const payload = {
    _id: user._id.toHexString(),
    access
  };
  const token = jwt.sign(payload, secret).toString();
  user.tokens.push({ access, token });
  return user.save()
    .then(() => {
      return token;
    }).catch(e => {
      console.error(e);
      return e;
    });
};

userSchema.statics.findByToken = function(token) {
  let decoded = null;
  try {
    decoded = jwt.verify(token, secret);
  } catch (e) {
    return new Promise.reject(e);
  }
  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  }).then(user => {
    const curatedUser = _.pick(user, ['_id', 'email', 'quotes']);
    return {
      curatedUser,
      token
    };
  });
};

userSchema.statics.signUp = (body) => {

  const userFromBody = _.pick(body, ['email', 'password']);
  const user = new User(userFromBody);
  return user.save()
    .then(() => {
      return user.generateAuthToken()
        .then(token => {
          const curatedUser = _.pick(user, ['_id', 'email']);
          return {
            curatedUser,
            token
          };
        })
    }).catch(e => {
      console.log(e.message);
      throw new Error(e.message);
    });
};

userSchema.statics.me = (user) => {
  return new Promise.resolve(user);
}


// @FIXME: implement
userSchema.statics.findByUsernameAndPassword = (user) => {

};


const User = mongoose.model('User', userSchema, 'users');

export default User;
