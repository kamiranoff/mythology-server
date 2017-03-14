import mongoose from 'mongoose';

const _mythologyQuoteSchema = {
  quote: { type: String },
  note: { type: String },
  book: { type: String },
  author: { type: String },
  likes: {type: Number},
  liked: { type: Boolean}
};

export default mongoose.Schema(_mythologyQuoteSchema);
