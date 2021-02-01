import { Router } from 'express'
const router = Router()
// import productController from '../controllers/product.controller' 
// router.get('/', productController.getAllProducts)
import * as productsCtrl from '../controllers/products.controller'
import { authJWT } from '../middlewares'

router.get('/', [authJWT.verifyToken], productsCtrl.getAllProducts)
router.get('/:id', productsCtrl.getProduct)
router.post('/', [authJWT.verifyToken, authJWT.isModerator], productsCtrl.createProduct)
router.put('/:id', [authJWT.verifyToken], productsCtrl.updateProduct)
router.delete('/:id', [authJWT.verifyToken, authJWT.isModerator], productsCtrl.deleteProduct)

module.exports = router
