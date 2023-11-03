import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  length: {
    type: String,
    // required: true,
  },
  songFile: {
    type: String,
    // required: true,
  },
});

const Song = mongoose.model('Song', songSchema);

export default Song;
