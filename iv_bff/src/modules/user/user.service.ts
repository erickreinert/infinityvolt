import { isAxiosError } from "axios";
import http from "../../config/http";
import dayjs from "dayjs";

export default class UserService {
  async cadastrarUsuario(
    email: string,
    nome: string,
    sobrenome: string,
    dataNascimento: string,
    telefone: string
  ) {
    const payload = {
      name: nome,
      lastname: sobrenome,
      birthdate: dayjs(dataNascimento).format("DD-MM-YYYY"),
      phone: telefone,
      email: email,
    };

    try {
      const res = await http.post(
        process.env.MS_USER_URL + "/clientes",
        payload
      );
      return true;
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response?.data.errors;
      }
      return false;
    }
  }
  async cadastrarVeiculo(
    marca: string,
    modelo: string,
    ano: string,
    autonomia: string
  ) {
    const payload = {
      Marca: marca,
      Modelo: modelo,
      Ano: ano,
      Autonomia: autonomia,
    };

    try {
      await http.post(process.env.MS_VEHICLE_URL + "/Veiculos", payload);
      return true;
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response?.data.errors;
      }
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
      return res.data.id;
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        console.log(error.response?.data.detail);
      }
      return false;
    }
  }
}
