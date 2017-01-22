import mongoose from 'mongoose';
import validator from 'validator';

const _UserSchema = {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: (value) => (
      validator.isEmail(value)
    ),
    message: '{VALUE} is not a valid email',
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  }]
};

export default mongoose.Schema(_UserSchema);
