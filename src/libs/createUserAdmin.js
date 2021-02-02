import User from '../models/User'
import Role from '../models/Role'

export const createUserAdmin = async () => {
  try {
    const userFound = await User.findOne({ email: "admin@localhost"})
    // example findOne({ email: "admin@gmail.com"})

    if(userFound) return

    const user = new User({
      username: process.env.USERNAME,
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    })

    // console.log(user)
    user.password = await User.encryptPassword(user.password)

    const foundRoles = await Role.find({ name: 'Admin'})
    // user.roles = foundRoles
    // console.log(foundRoles)
    // console.log(foundRoles[0]._id)
    user.roles = [foundRoles[0]._id]

    const admin = await user.save()
    // console.log(admin)
    console.log('Admin create')

  } catch (error) {
    console.error(error);
  }
}