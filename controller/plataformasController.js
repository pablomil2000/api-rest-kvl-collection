// Controllador de plataformas

import { plataformasModel } from '../models/plataformas.js'

export class plataformasController {
  static async getPlataformas (limit) {
    return await plataformasModel.getPlataformas(limit)
  }
}
