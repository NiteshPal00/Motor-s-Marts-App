import mongoose from "mongoose";
import productHomeModels from "./productHome.models";
import userModell from './user.models'

const Schema = mongoose.Schema;

const CartSchema = new Schema({

  productID:{
    type:Schema.Types.ObjectId,
    required:true,
    ref : productHomeModels,
  },
  userID:{
    type:Schema.Types.ObjectId,
    required:true,
    ref : userModell,

  },
  title:{
    type:String,
    required:true
  },
  image:{
    type:String,
    default:null
  },
  buy:{
    type:Number,
    required:true
  },
  quantity:{
    type:Number,
    required:true
  }
  
});

export default mongoose.model('cart',CartSchema);
