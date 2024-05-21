import mongoose from "mongoose";
// import cartProductModels from "./cartProduct.models";
// import userModels from "./user.models";

const Schema = mongoose.Schema;

const checkoutSchema = new Schema({
    // cartID: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: cartProductModels,
    // },
    // userID:{
    //     type:Schema.Types.ObjectId,
    //     required:true,
    //     ref : userModels,
    //   },
    // title: {
    //     type: String,
    //     required: true
    // },
    // image: {
    //     type: String,
    //     default: null
    // },
    // buy: {
    //     type: Number,
    //     required: true
    // },
    // quantity: {
    //     type: Number,
    //     required: true
    // },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    street_address: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip_code: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    order_notes: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Number,
        default: 1
    }
})

export default mongoose.model('checkOut', checkoutSchema);
