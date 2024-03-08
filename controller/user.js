import { userModel } from '../models/user.js'

export class userController {
  static async searchUsers (email, password) {
    // console.log(password)
    const users = await userModel.findByEmailAndPassword(email, password)
    return users[0]
  }

  static async searchUsersByfield (fieldName, fieldValue) {
    const users = await userModel.findByField(fieldName, fieldValue)[0]
    if (users !== undefined) {
      console.log(users.length)
      return users
    }
    return false
  }

  static async register (username, email, password) {
    // comprobar existe usuario o email
    const user = await userModel.findByField('username', username)
    const userEmail = await userModel.findByField('email', email)
    console.log(user[0] !== undefined)
    if (user[0] !== undefined) {
      const user = await userModel.create(username, email, password)
      return user
    }
    return false
  }
}
