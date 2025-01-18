import { Request, Response } from "express";
import UserService from "./user.service";
const { v4: uuidv4 } = require('uuid');
export default class UserController {
  private service = new UserService();

  async cadastrar(req: Request, res: Response) {
    const {
      email,
      nome,
      sobrenome,
      dataNascimento,
      telefone,
      marca,
      modelo,
      autonomia,
      ano,
    } = req.body;
    const correlationId = uuidv4()
    const usuario = await this.service.cadastrarUsuario(
      email,
      nome,
      sobrenome,
      dataNascimento,
      telefone,
      correlationId
    );
    const veiculo = await this.service.cadastrarVeiculo(
      marca,
      modelo,
      ano,
      autonomia,
      correlationId
    );

    if (usuario === true && veiculo === true) {
      return res
        .status(200)
        .json({ message: "Cadastro realizado com sucesso" });
    } else {
      console.log("usuario ")
      console.log(usuario)
      console.log("veiculo ")
      console.log(veiculo)
      return res.status(400).json({ message: "Erro ao cadastrar" });
    }
  }

  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    const accessToken = await this.service.login(email, senha);

    if (accessToken) {
      return res
        .status(200)
        .json({ message: "Login realizado", accessToken: accessToken });
    } else {
      return res.status(404).json({ message: "E-mail ou senha inválidos" });
    }
  }
}
