import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  length: {
    type: String,
  },
  songFile: {
    type: String,
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
  }
});

const Song = mongoose.model('Song', songSchema);

export default Song;
