import { isAxiosError } from "axios";
import http from "../../config/http";

export default class UserService {
  async cadastrarUsuario(
    email: string,
    nome: string,
    sobrenome: string,
    dataNascimento: string,
    telefone: string,
    correlationId:string
  ) {
    const payload = {
      name: nome,
      lastname: sobrenome,
      birthdate: dataNascimento,
      phone: telefone,
      email: email,
      correlation_id: correlationId
    };

    try {
      const res = await http.post(process.env.MS_USER_URL + "/clientes", payload);
      console.log(res.data)
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async cadastrarVeiculo(
    marca: string,
    modelo: string,
    ano: string,
    autonomia: string,
    correlationId: string
  ) {
    const payload = {
      brand_name: marca,
      model_name: modelo,
      model_year: ano,
      autonomy: autonomia,
      correlation_id: correlationId
    };

    try {
      await http.post(process.env.MS_VEHICLE_URL + "/veiculos", payload);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async login(email: string, senha: string) {
    const payload = {
      email: email,
    };
    try {
      const res = await http.post(
        process.env.MS_USER_URL + "/clientes/buscar/email",
        payload
      );
      return res.data.id
    } catch (error) {
      console.log(error)
      if (isAxiosError(error)) {
        console.log(error.response?.data.detail);
      }
      return false;
    }
  }
}
