// Modelo de usuarios
import { db } from './conection.js'

export class plataformasModel {
  static async getPlataformas (limit = 1000) {
    return await db.query('SELECT * FROM plataformas limit ' + limit)
  }
}
