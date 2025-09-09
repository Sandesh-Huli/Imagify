import User from "../models/User.js";
import express from 'express';
const router = express.Router();
import FormData from "form-data";
import axios from "axios";
import { isAuthenticated } from '../middlewares/auth.js'
router.post('/generate', isAuthenticated, async (req, res) => {
    try {
        const { prompt } = req.body;
        const userId = req.user._id;
        const user = await User.findById(userId);
        if (!user || !prompt) {
            return res.json({
                success: false,
                message: "Insufficient data"
            });
        }
        if (user.creditBalance <= 0) {
            return res.json({
                success: false,
                message: "Insufficent credits",
                creditBalance: user.creditBalance
            });
        }
        const form = new FormData()
        form.append('prompt', prompt)

        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', form, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        });
        const base64img = Buffer.from(data, "binary").toString('base64');
        const result = `data:image/png;base64,${base64img}`;

        await User.findByIdAndUpdate(userId, { creditBalance: user.creditBalance - 1 }); //deduct the credit balance of the user   
        res.json({
            success: true,
            message: "image generated",
            creditBalance: user.creditBalance,
            result: result      
        })
    } catch (err) {
        console.log(err);   
        res.json({
            success: false,
            message: err.message,
        })
    }
});

export default router;