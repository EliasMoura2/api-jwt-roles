import User from '../models/User'
import jwt from 'jsonwebtoken'
// import config from '../config/config'

export const signUp = async (req, res) => {
  // res.json('signup')
  const { username, email, password, roles } = req.body

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password)
  })
  
  // console.log(req.body)
  // console.log(newUser)

  const savedUser = await newUser.save()

  const token = jwt.sign({id: savedUser._id},  process.env.JWT_SECRET, {
    expiresIn: 86400 // 24 horas
  })

  res.status(200).json({token})
}

export const logIn = (req, res) => {
  res.json('login')
}