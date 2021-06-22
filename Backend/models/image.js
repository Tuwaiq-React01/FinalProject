const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ImageSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    rate: {
        type: [Number],
        default: [5]
    }

},{ timestamps: true });

var Image = mongoose.model("Image", ImageSchema);

// export Ticket model
module.exports = Image;