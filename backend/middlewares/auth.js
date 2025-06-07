import express from 'express';
import passport from 'passport';

import User from '../models/User.js';
export const SignUpM = async (req, res, next) => {
    const { username, email, password, creditBalance = 0 } = req.body;

    try {
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(409).json({ message: 'Username already exists!' });
        }

        User.register(
            new User({ username, email, creditBalance }),
            password,
            (err, user) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Error signing up');
                }

                req.login(user, (err) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send('Error logging in after signing up');
                    }
                    req.user = user;
                    return next();
                });
            }
        );
    } catch (error) {
        console.error(error);
        return res.status(500).send('Something went wrong during signup');
    }
};


export const LoginM = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            next(err);
        }
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            req.user = user;
            next();
        });
    })(req, res, next);
}

export const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.status(401).json({ message: 'Not Authenticated' });
    }
}