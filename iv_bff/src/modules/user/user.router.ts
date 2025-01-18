import express, { Request } from 'express'
import UserController from './user.controller'

const userRouter = express.Router()
const userController = new UserController()

userRouter.post ("/", (req, res) => userController.cadastrar(req, res))
userRouter.post ("/login", (req, res) => userController.login(req, res))

export default userRouter