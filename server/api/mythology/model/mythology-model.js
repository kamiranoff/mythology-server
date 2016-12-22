import mongoose from 'mongoose';

const _mythologySchema = {
  name: {type: String},
  greekName: {type: String},
  romanName: {type: String},
  category: {type: String},
  description: {type: String},
  immortal: {type: String},
  gender: {type: String},
  images: [
    {thumbmail: {type: String}},
    {regular: {type: String}}
  ],
  relatives: {
    father: {type:String},
    mother: {type:String},
    spouses: {type: Array},
    lovers: {type: Array},
    children: {type: Array},
  }

};

export default mongoose.Schema(_mythologySchema);
