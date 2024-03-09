import { userController } from './controller/user.js'
import express from 'express'
import cors from 'cors'
import CryptoJS from 'crypto-js'

const app = express()

app.disable('x-powered-by') // Deshabilita la cabecera X-Powered-By
app.use(cors())

app.use(express.json())

// metodo para login
app.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await userController.searchUsers(email, CryptoJS.SHA512(password).toString())
  if (user.length === 1) {
    // devoler usuario
    res.status(200).json({ message: 'Usuario autenticado', user })
  } else {
    res.status(401).json({ message: 'Usuario no autenticado' })
  }
})

app.put('/user', async (req, res) => {
  const { username, email, password } = req.body
  // console.log(username, email, password)
  const user = await userController.register(username, email, CryptoJS.SHA512(password).toString())
  // console.log(user)
  return user
})

const PORT = process.env.PORT ?? 3002

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto  http://localhost:${PORT}`)
})
