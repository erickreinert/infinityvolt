import express, { Request } from 'express'
import VehicleController from './vehicle.controller'

const vehicleRouter = express.Router()
const vehicleController = new VehicleController()

vehicleRouter.get("/owner/:userId", (req, res) => vehicleController.listarVeiculosPorUsuario(req, res))

export default vehicleRouter