import express from 'express'
import userRouter from '../modules/user/user.router'
import vehicleRouter from '../modules/vehicle/vehicle.router'

const router = express.Router()

router.use("/user", userRouter)
router.use("/vehicle", vehicleRouter)

export default router