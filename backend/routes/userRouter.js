import express from 'express';
import { SignUpM, LoginM, isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();
//signup route
router.post('/SignUp', SignUpM, async (req, res) => {
    return res.status(200).json({
        message: 'Signup successful',
        user: { username: req.user.username, email: req.user.email,creditBalance:req.user.creditBalance }
    });
});

//login route
router.post('/login', LoginM, (req, res) => {
    res.status(200).json({
        message: 'Login successful',
        user: { username: req.user.username, email: req.user.email,creditBalance:req.user.creditBalance }
    })
});


//logout route
router.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) return res.status(500).json({ message: 'Logout failed' });
        res.clearCookie('connect.sid');
        res.status(200).json({ message: 'Logged out successfully' });
    });
})  

//check auth
router.get('/checkAuth',isAuthenticated,async (req,res)=>{
    console.log(req.user);
    res.status(200).json({
        message: 'User is authenticated',
        user: { username: req.user.username, email: req.user.email, creditBalance:req.user.creditBalance }
    })
});


export default router;