import User from '../models/User'
import jwt from 'jsonwebtoken'
import Role from '../models/Role'
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

  if(roles){
    const foundRoles = await Role.find({name: {$in: roles}})
    newUser.roles = foundRoles.map(role => role._id)
  } else {
    const role = await Role.findOne({name: 'User'})
    newUser.roles = [role._id]
  }

  const savedUser = await newUser.save()
  console.log(savedUser)
  const token = jwt.sign({id: savedUser._id},  process.env.JWT_SECRET, {
    expiresIn: 86400 // 24 horas
  })

  res.status(200).json({token})
}

export const logIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate('roles')
  if(!userFound){
    return res.status(400).json({message: 'User not found'})
  }
  
  // console.log(userFound)
  
  const matchPassword = await User.comparePassword(req.body.password, userFound.password)

  if(!matchPassword) return res.status(400).json({ token: null, message: 'Invalid password' })
  
  const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET, {
    expiresIn: 86400
  })
    // res.json('login')
    res.json({ token })
}