import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, 'kann nicht leer sein'],
      match: [/^[a-zA-Z0-9]+$/, 'ist ungültig'],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    jwtToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();

    const saltTimes = 10;
    const hashedPassword = await bcryptjs.hash(this.password, saltTimes);
    this.password = hashedPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});

// compare Password
userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcryptjs.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

// generate JWT-Token
userSchema.methods.generateJWT = function () {
  const secretKey = 'secret-key';

  const payload = {
    id: this._id,
    username: this.username,
  };

  const options = {
    expiresIn: '2h',
  };

  return jwt.sign(payload, secretKey, options);
};

const User = mongoose.model('User', userSchema);

export default User;
