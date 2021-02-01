import { Router } from 'express'
const router = Router()
// import productController from '../controllers/product.controller' 
// router.get('/', productController.getAllProducts)
import * as productsCtrl from '../controllers/products.controller'

router.get('/', productsCtrl.getAllProducts)
router.get('/', productsCtrl.getProduct)
router.post('/:id', productsCtrl.createProduct)
router.put('/:id', productsCtrl.updateProduct)
router.delete('/:id', productsCtrl.deleteProduct)

module.exports = router
