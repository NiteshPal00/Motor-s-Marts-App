import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productHomeRouter from './routers/productHome.routers';
import inventoryProductRouter from './routers/inventoryProduct.router';
import cartRouter from './routers/cartProduct.routers';
import userRouter from './routers/user.router';
import compareRouter from './routers/compareProduct.routers';
import checkoutRouter from './routers/checkout.router';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

const port = 8001;

app.get('/', (req, res) => {
    res.send("Hello Duniya!!!")
})

mongoose.connect('mongodb://127.0.0.1:27017/Motors_Project')
    .then(() => console.log('Connected!'))
    .catch(err => console.log('Error connecting to MongoDB:',err));

app.listen(port, () => {
    console.log(`Server is sucessfully running on port ${port}`);
})

app.use(productHomeRouter);
app.use(inventoryProductRouter);
app.use(cartRouter);
app.use(userRouter);
app.use(compareRouter);
app.use(checkoutRouter);
