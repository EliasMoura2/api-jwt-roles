import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
})
  .then( db => console.log('DB is CONNECTED'))
  .catch( error => console.error(error))

// module.exports = database