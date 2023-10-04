import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/outermusic';
// const uri = 'mongodb://localhost:127.0.0.1:27017/outermusic';

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
    console.log('Connected to DB');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export default connectDB;
