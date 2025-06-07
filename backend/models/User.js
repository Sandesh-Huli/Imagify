import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    creditBalance: {
        type: Number,
        default: 0,
    }
});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
