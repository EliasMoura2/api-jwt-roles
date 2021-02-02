import express from 'express'
import logger from 'morgan'
import pkg from '../package.json'

import { createRoles } from './libs/initialSetup'
import { createUserAdmin } from './libs/createUserAdmin'

const productRoutes = require('./routes/products.routes')
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')
const roleRoutes = require('./routes/role.routes')

// initializations
const app = express();
require('./config/database')
createRoles()
createUserAdmin()
/*
Server listening on port = 5000
DB is CONNECTED
[
  { _id: 6018419f709d62be40eaa086, name: 'User' },
  { _id: 6018419f709d62be40eaa087, name: 'Moderator' },
  { _id: 6018419f709d62be40eaa088, name: 'Admin' }
]
*/

app.set('pkg', pkg)

// middleware
app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//routes
// app.use('/', require('./routes/index.routes'))
app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  })
})

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/roles', roleRoutes)

module.exports = app