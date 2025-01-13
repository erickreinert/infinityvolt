import http from "../../config/http"

export default class UserService {
  async cadastrarUsuario(email: string, nome: string, sobrenome: string, dataNascimento: string, telefone: string) {
    const payload = {
        "name": nome,
        "lastname": sobrenome,
        "birthdate": dataNascimento,
        "phone": telefone,
        "email": email
    }

    try {
      await http.post(process.env.MS_USER_URL + "/clientes", payload)    
      return true  
    } catch (error) {
      return false
    }

  }
  async cadastrarVeiculo(marca: string, modelo: string, ano: string, autonomia: string) {
    const payload = {
      "Marca": marca,
      "Modelo": modelo,
      "Ano": ano,
      "Autonomia": autonomia
    }

  try {
    await http.post(process.env.MS_VEHICLE_URL + "/Veiculos", payload)    
    return true  
  } catch (error) {
    return false
  }
  }
}