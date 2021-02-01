import express from 'express'
import logger from 'morgan'
import pkg from '../package.json'


const productRoutes = require('./routes/products.routes')

// initializations
const app = express();
// require('./config/database')
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

app.use('/products', productRoutes)


module.exports = app