import mongoose from 'mongoose';

const _mythologyFigureSchema = {
  name: { type: String },
  greekName: { type: String },
  romanName: { type: String },
  category: { type: String },
  description: { type: String },
  immortal: { type: String },
  gender: { type: String },
  images: {
    thumbnail: { type: String },
    regular: { type: String }
  },
  relatives: {
    father: { type: String },
    mother: { type: String },
    spouses: { type: Array },
    lovers: { type: Array },
    children: { type: Array },
  },
  books: { type: Array },
  events: { type: Array },

};

export default mongoose.Schema(_mythologyFigureSchema);
