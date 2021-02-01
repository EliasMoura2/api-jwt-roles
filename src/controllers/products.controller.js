import Product from '../models/Product'

export const getAllProducts = async (req, res) => {
  const products = await Product.find()
  res.status(200).json(products)
}

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.status(200).json(product)
}

export const createProduct = async (req, res) => {
  try {
    const { name, category, price, imgURL } = req.body
    const newProduct = new Product({ name, category, price, imgURL })
    const productSaved = await newProduct.save()
    // console.log(newProduct)
    res.status(201).json(productSaved)
  } catch (error) {
    console.log(error)
    res.status(400)
  }
}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true
  })
  // devuelve el dato actualizado no el anterior
  res.status(200).json(updatedProduct)
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params
  await Product.findByIdAndDelete(id)
  // res.send('delete product')
  res.status(204)
}
// module.exports = {
//   getAllProducts: (req, res) => {
//     res.send('Get All products')
//   },
//   getProduct: (req, res) => {

//   },
//   createProduct: (req, res) => {

//   },
//   updateProduct: (req, res) => {

//   },
//   deleteProduct: (req, res) => {
    
//   }
// }