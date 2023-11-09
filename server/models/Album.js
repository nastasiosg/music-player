import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  artist: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  genre: {
    type: String,
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song',
    },
  ],
});

const Album = mongoose.model('Album', albumSchema);

export default Album;
