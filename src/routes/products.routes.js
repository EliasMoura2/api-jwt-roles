import { Router } from 'express'
const router = Router()
// import productController from '../controllers/product.controller' 
// router.get('/', productController.getAllProducts)
import * as productsCtrl from '../controllers/products.controller'

router.get('/', productsCtrl.getAllProducts)
router.get('/:id', productsCtrl.getProduct)
router.post('/', productsCtrl.createProduct)
router.put('/:id', productsCtrl.updateProduct)
router.delete('/:id', productsCtrl.deleteProduct)

module.exports = router
