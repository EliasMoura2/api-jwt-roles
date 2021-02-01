import { Schema, model } from 'mongoose'
// const { Schema, model} = require('mongoose');

const productSchema = new Schema({
  name: String,
  category: String,
  price: Number,
  imgURL: String
}, {
  timestamps: true
})
// para que no aparezca el _v

// module.exports = model('Product', productSchema)
export default model('Product', productSchema)