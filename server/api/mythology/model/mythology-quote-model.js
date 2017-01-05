import mongoose from 'mongoose';

const _mythologyQuoteSchema = {
  quote: { type: String },
  note: { type: String },
  book: { type: String },
  author: { type: String },
};

export default mongoose.Schema(_mythologyQuoteSchema);
