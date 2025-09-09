import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import passport from 'passport'
import passportLocal from 'passport-local';
import LocalStrategy from 'passport-local'
import session from 'express-session'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';

import main from './config/mongodb.js'
import User from './models/User.js'
import userRouter from './routes/userRouter.js'
import imageRouter from './routes/imageRouter.js'

await main();

const app = express();
const port = process.env.PORT
const frontend_uri = process.env.FRONTEND_URI
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: frontend_uri,
    credentials: true,
}));
app.use(session({
    secret: 'myPassword@00',       // use env var in production
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collection: 'sessions'
    }),
    cookie: {
        secure: false,               // set to true if using https
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,  // 1 day
        sameSite:'lax'
    }
}));
app.use((req, res, next) => {
//   console.log("Cookies:", req.cookies);            // If using cookie-parser
  next();
});
// app.use(cors());
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/user', userRouter);
app.use('/image',imageRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the server side ok right');
})

app.listen(port, () => {
    console.log("Server is running on port ",port)
})