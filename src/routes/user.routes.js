import { Router } from 'express'
const router = Router()
import * as userCtrl from '../controllers/user.controller'
import { authJWT, verifySignup } from '../middlewares'

router.get('/', userCtrl.getAllUsers)
router.get('/:id', userCtrl.getUSer)
router.put('/:id', [
    authJWT.verifyToken, 
    authJWT.isAdmin, 
    verifySignup.checkRolesExisted
  ], 
  userCtrl.updateUser)

module.exports = router