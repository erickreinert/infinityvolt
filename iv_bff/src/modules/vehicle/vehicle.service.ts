import { isAxiosError } from "axios";
import http from "../../config/http";

export default class VehicleService {
  async listarVeiculosPorUsuario(userId: string) {
    try {
      const listaVeiculos = await http.get(
        process.env.MS_VEHICLE_URL + "/veiculos/owner/" + userId
      );
      return listaVeiculos.data;
    } catch (error) {
        console.log(error)
      return false;
    }
  }
}
