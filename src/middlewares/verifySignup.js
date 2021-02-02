import { ROLES } from '../models/Role';
import User from '../models/User'
// console.log(ROLES)

export const checkRolesExisted = (req, res, next) => {
  console.log(req.body.roles)
  if(req.body.roles){
    const long = req.body.roles.length
  
    for (let i = 0; i < long ; i++) {
      // console.log(req.body.roles)
      // console.log(req.body.roles[i])
      // console.log()
      if(!ROLES.includes(req.body.roles[i])){

        return status(400).json({
          message: `Role ${req.body.roles[i]} does not exists`
        })
      }
    }
  }
  next()
}

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username })
  if(user) return res.status(400).json({ message: 'The user already exists'})
  
  const email = await User.findOne({ email: req.body.email })
  if(email) return res.status(400).json({ message: 'The email already exists'})

  next()
}