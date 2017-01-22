import mongoose from 'mongoose';
// Use native promises
import jwt from 'jsonwebtoken';
import _ from 'lodash';

import userSchema from '../model/user-model';

import secret from '../../../constants/secret.json';

userSchema.methods.handleError = function() {

};

userSchema.methods.generateAuthToken = function() {
  const access = 'auth';
  const payload = {
    _id: this._id.toHexString(),
    access
  };
  const token = jwt.sign(payload, secret.secret).toString();
  this.tokens.push({ access, token });
  return this.save()
    .then(() => {
      return token;
    }).catch(e => {
      console.error(e);
      return e;
    });
};

userSchema.statics.findByToken = function(token) {
  console.log('find by token');
  let decoded = null;
  try {
    decoded = jwt.verify(token, secret.secret);
  } catch (e) {
    return new Promise.reject(e);
  }
  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
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

userSchema.statics.signIn = (user) => {

};


const User = mongoose.model('User', userSchema, 'users');

export default User;
