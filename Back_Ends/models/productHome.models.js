import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productHomeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    petrol: {
        type: String,
        required: true
    },
    special: {
        type: String,
        default: null
    },
    images:{
        type: Array,
        default: []
    },
    name: {
        type: String,
        required: true
    },
    name1: {
        type: String,
        required: true
    },
    buy:{
        type: Number,
        required: true
    },
    msrp:{
        type: Number,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    mileage:{
        type: String,
        required: true
    },
    transmission:{
        type: String,
        required: true
    },
    fuelType:{
        type: String,
        required: true
    },
    engine:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    drive:{
        type: String,
        required: true
    },
    exteriorColor:{
        type: String,
        required: true
    },
    interiorColor:{
        type: String,
        required: true
    },
    vin:{
        type: String,
        required: true
    },
    cityMPG:{
        type: Number,
        required: true
    },
    hwyMPG:{
        type: Number,
        required: true
    },
    layout:{
        type: String,
        required: true
    },
    engineVol:{
        type: String,
        default: null
    },
    displacement:{
        type: String,
        default: null
    },
    typeDrive:{
        type: String,
        required: true
    },
    horsePower:{
        type: String,
        required: true
    },
    power:{
        type: String,
        required: true
    },
    torque:{
        type: String,
        required: true
    },
    compRatio:{
        type: String,
        required: true
    },
    speed:{
        type: String,
        required: true
    },
    mph:{
        type: String,
        required: true
    },
    gears:{
        type: Number,
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
})

export default mongoose.model("productHome", productHomeSchema);