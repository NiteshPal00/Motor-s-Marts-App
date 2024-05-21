import mongoose from "mongoose";
import productHomeModels from "./productHome.models";
import userModels from "./user.models";

const Schema = mongoose.Schema;

const compareSchema = new Schema({
    productID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: productHomeModels,
    },
    userID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: userModels,
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: null
    },
    body: {
        type: String,
        required: true
    },
    mileage: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    drive: {
        type: String,
        required: true
    },
    exteriorColor: {
        type: String,
        required: true
    },
    interiorColor: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    status:{
        type: Number,
        default: 1
    }
});

export default mongoose.model('compare', compareSchema);
