const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const purchaseRouter = require('./routes/purchase');
const requestRouter = require('./routes/request');


app.use('/user', userRouter);
app.use('/purchase', purchaseRouter);
app.use('/admin', adminRouter);
app.use('/api-request', requestRouter);

mongoose.connect('mongodb+srv://admin:projectapis@cluster0.xpbva3d.mongodb.net/apis?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("connected");
    // dumpData();
    app.listen(4000);
}).catch((err)=>{
    console.log(err);
}) 



// const Product = require('./models/product');
// const User = require('./models/user');


// async function dumpData(){

//     let res = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');

//     res = res.data;

//     for(let i = 0;i<res.length;i++){

//         let newProduct = new Product({
//             name: res[i].name,
//             description: res[i].description,
//             brand: res[i].brand,
//             price: res[i].price,
//             price_sign: res[i].price_sign,
//             currency: res[i].currency,
//             image_link: res[i].image_link,
//             rating: res[i].rating,
//             category: res[i].category,
//             product_type: res[i].product_type
//         })

//         await newProduct.save();
//         console.log(i);

//     }
// }