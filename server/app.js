import express from 'express';
import cors from 'cors';

import connectDB from './db/connection.js';
import auth from './routes/auth.js';
import album from './routes/album.js';
import song from './routes/song.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

connectDB()
  .then(() => {})
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.use('/uploads', express.static('public/uploads'));
app.use('/uploads', express.static('public/uploads/songs'));

app.use('/auth', auth);
app.use('/api', album);
app.use('/api/songs', song);

app.listen(PORT, () => {
  console.log(`App listens on http://localhost:${PORT}`);
});
