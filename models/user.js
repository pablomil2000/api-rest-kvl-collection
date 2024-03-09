// Modelo de usuarios
import { db } from './conection.js'

export class userModel {
  static async getUsers () {
    return await db.query('SELECT * FROM users')
  }

  static async findByField (fieldName, fieldValue) {
    return await db.query('SELECT * FROM users WHERE ? like ?', [fieldName, fieldValue])
  }

  static async findByUsername (username) {
    return await db.query('SELECT * FROM users WHERE username like ?', [username])
  }

  static async findByEmail (email) {
    return await db.query('SELECT * FROM users WHERE email like ?', [email])
  }

  static async findByEmailAndPassword (email, password) {
    return await db.query('SELECT * FROM users WHERE email like ? AND password like ?', [email, password])
  }

  static async create (username, email, password) {
    return await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password])
  }
}
