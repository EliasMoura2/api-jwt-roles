import User from '../models/User'

export const getAllUsers = async (req, res) => {
  const users = await User.find({})
  res.status(200).json(users)
}

export const getUSer = async (req, res) => {
  const user = await User.findById(req.params.id)
}

export const updateUser = (req, res) => {
  const id = req.params.id
  res.json(`update user id = ${id}`)
}

