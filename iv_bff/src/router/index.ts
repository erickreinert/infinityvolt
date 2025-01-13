import express from 'express'
import userRouter from '../modules/user/user.router'

const router = express.Router()

router.use("/cadastro", userRouter)

export default router