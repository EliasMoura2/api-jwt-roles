import { Router } from 'express'
const router = Router()
import *as roleCtrl from '../controllers/roles.controller'

router.get('/', roleCtrl.getAllRoles)

module.exports = router