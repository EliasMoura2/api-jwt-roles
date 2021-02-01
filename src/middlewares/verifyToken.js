import jwt from 'jsonwebtoken'
import User from '../models/User'
import Role from '../models/Role'

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"]
    // console.log(token)
    if(!token) return res.status(403).json({ message: 'token not provided' })
  
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // console.log('decoded', decoded)
  
    req.userId = decoded.id
    // console.log('req.userId', req.userId)
    
    const user = await User.findById(req.userId, { password: 0 })
    // console.log('user', user)
    
    if(!user) return res.status(404).json({ message: 'User not found' })
    
    next()
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Unauthorized'})
  }
}

export const isModerator = async (req, res, next) => {
  const user = await User.findById(req.userId, { password: 0})
  console.log('user moderator',user)
  const roles = await Role.find({_id: { $in: user.roles }})
  console.log(roles)

  const long = roles.length

  for (let i = 0; i < long; i++) {
    if(roles[i].name === 'Moderator'){
      next()
      return
    }
  }
  return res.status(403).json({ message: 'Required Moderator role'})
}

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId, { password: 0})
  console.log('user moderator',user)
  const roles = await Role.find({_id: { $in: user.roles }})
  console.log(roles)

  const long = roles.length

  for (let i = 0; i < long; i++) {
    if(roles[i].name === 'Admin'){
      next()
      return
    }
  }
  return res.status(403).json({ message: 'Required Admin role'})
}