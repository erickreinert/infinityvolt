import express, { Request } from 'express'
import UserController from './user.controller'

const userRouter = express.Router()
const userController = new UserController()

userRouter.post ("/", (req, res) => userController.cadastrar(req, res))

export default userRouter