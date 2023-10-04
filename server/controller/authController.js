import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

// create new user
export async function signUp(req, res) {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = new User({ username, password });
    // save new user in db
    await newUser.save();

    const token = newUser.generateJWT();

    res.status(201).json({ message: 'User created.', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error occured.' });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    // search for user in DB
    const user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // check password with DB
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Wrong Password' });
    }
    // create JWT-Token if pw correct
    const token = user.generateJWT();

    // send token to client
    res.status(200).json({ message: 'Login successful', token, username });
    console.log(username)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Login error' });
  }
}
