import express from 'express';
import passport from 'passport';

import User from '../models/User.js';

export const SignUpM = async (req, res, next) => {
  const { username, email, password, creditBalance = 3 } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({ message: 'Missing username or password' });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(409).json({ name: 'UserExistsError', message: 'Username already exists!' });
    }

    const user = new User({ username, email, creditBalance });
    const registeredUser = await new Promise((resolve, reject) => {
      User.register(user, password, (err, u) => (err ? reject(err) : resolve(u)));
    });

    req.login(registeredUser, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error logging in after signup' });
      }
      req.user = registeredUser;
      return next();
    });
  } catch (error) {
    return res.status(500).json({ message: 'Signup failed', name: error.name, detail: error.message });
  }
};

export const LoginM = async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: 'Invalid username or password' });
    req.login(user, (err) => {
      if (err) return next(err);
      req.user = user;
      next();
    });
  })(req, res, next);
};

export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.status(401).json({ message: 'Not Authenticated' });
};