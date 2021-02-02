import User from '../models/User'

export const getAllUsers = async (req, res) => {
  const users = await User.find({})
  res.status(200).json(users)
}

export const getUser = async (req, res) => {
// try{
    const user = await User.findById(req.params.id)
    if(!user) return res.status(404).json({ message: 'User does not exist'})
    // if (!user) return next(new Error('User does not exist'));

    res.status(200).json(user)
// } catch (error) {
//   next(error)
//  }
}

export const updateUser = (req, res) => {
  const id = req.params.id
  res.json(`update user id = ${id}`)
}

// exports.updateUser = async (req, res, next) => {
//   try {
//    const update = req.body
//    const userId = req.params.userId;
//    await User.findByIdAndUpdate(userId, update);
//    const user = await User.findById(userId)
//    res.status(200).json({
//     data: user,
//     message: 'User has been updated'
//    });
//   } catch (error) {
//    next(error)
//   }
//  }
  
//  exports.deleteUser = async (req, res, next) => {
//   try {
//    const userId = req.params.userId;
//    await User.findByIdAndDelete(userId);
//    res.status(200).json({
//     data: null,
//     message: 'User has been deleted'
//    });
//   } catch (error) {
//    next(error)
//   }
//  }
