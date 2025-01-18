import { Request, Response } from "express";
import VehicleService from "./vehicle.service";

export default class VehicleController {
  private service = new VehicleService();

  async listarVeiculosPorUsuario(req: Request, res: Response) {
    const userId = req.params.userId;

    const listaVeiculos = await this.service.listarVeiculosPorUsuario(userId);

    if (listaVeiculos) {
      return res.status(200).json({
        message: "Veiculos listados com sucesso!",
        data: listaVeiculos,
      });
    } else {
      return res.status(500).json({
        message: "Erro ao listar veículos",
      });
    }
  }
}
