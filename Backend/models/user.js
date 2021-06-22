const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        default: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
    },

    bio: {
        type: String,
    },
    


}, { timestamps: true });



var User = mongoose.model("User", UserSchema);

// export user model
module.exports = User;
