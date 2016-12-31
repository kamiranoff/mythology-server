import mongoose from 'mongoose';

const _mythologyBookSchema = {
  title: { type: String },
  author: { type: String },
  description: { type: String },
  excerpt: { type: String },
  rating: { type: Number },
  link: { type: String },
  fullText: {type: String},
};

export default mongoose.Schema(_mythologyBookSchema);
