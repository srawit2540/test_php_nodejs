const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userCode: Number,
    firstName: String,
    lastName: String,
    email: String
}, {
        timestamps: true
    });
const user = mongoose.model('User', userSchema);

const productSchema = new mongoose.Schema({
    productCode: Number,
    productName: String
}, {
        timestamps: true
    });
const product = mongoose.model('Product', productSchema);

const orderSchema = new mongoose.Schema({
    orderNumber: Number,
    orderDate: Date,
    productCode: String,
    userCode: Number,
    address: String
}, {
        timestamps: true
    });
const order = mongoose.model('Order', orderSchema);

module.exports = {
    user: user,
    product: product,
    order: order
}