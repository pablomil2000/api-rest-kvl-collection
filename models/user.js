// Modelo de usuarios
import { db } from './conection.js'

export class userModel {
  static async getUsers () {
    return await db.query('SELECT * FROM users')
  }

  static async findByField (fieldName, fieldValue) {
    return await db.query('SELECT * FROM users WHERE ?? = ?', [fieldName, fieldValue])
  }

  static async findByEmailAndPassword (email, password) {
    return await db.query('SELECT * FROM users WHERE email like ? AND password like ?', [email, password])
  }

  static async create (username, email, password) {
    return { message: 'patata' }
  }
}
