import { Router } from 'express'
const router = Router()
// example = const { renderIndex, renderAbout } = require("../controllers/index.controller");
// import * as userCtrl from '../controllers/user.controller'
import { 
  getAllUsers, 
  getUser, 
  updateUser
} from '../controllers/user.controller'

import { 
  authJWT, 
  verifySignup
} from '../middlewares'

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/:id', [
    authJWT.verifyToken, 
    authJWT.isAdmin, 
    verifySignup.checkRolesExisted
  ], 
  updateUser)

module.exports = router