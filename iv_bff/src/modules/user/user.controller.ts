import { Request, Response } from "express";
import UserService from "./user.service";
const { v4: uuidv4 } = require('uuid');
export default class UserController {
    private service = new UserService();

    async cadastrar(req: Request, res: Response) {
        const {email, nome, sobrenome, dataNascimento, telefone, marca, modelo, autonomia, ano} = req.body
        const id = uuidv4();
        const usuario = await this.service.cadastrarUsuario(email, nome, sobrenome, dataNascimento, telefone, id)
        const veiculo = await this.service.cadastrarVeiculo(marca, modelo, ano, autonomia, id)

        if (usuario && veiculo) {
            return res.status(200).json({message: "Cadastro realizado com sucesso"})
        } else {
            return res.status(500).json({message: "Erro ao cadastrar"})
        }
    }
}