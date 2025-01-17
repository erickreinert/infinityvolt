import http from "../../config/http"

export default class UserService {
  async cadastrarUsuario(email: string, nome: string, sobrenome: string, dataNascimento: string, telefone: string, uuid:string) {
    const payload = {
        "correlation_id": uuid,
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
  async cadastrarVeiculo(marca: string, modelo: string, ano: string, autonomia: string, uuid:string) {
    const payload = {
      "correlation_id": uuid,
      "brand_name": marca,
      "model_name": modelo,
      "model_year": ano,
      "autonomy": autonomia
    }

  try {
    await http.post(process.env.MS_VEHICLE_URL + "/veiculos", payload)    
    return true  
  } catch (error) {
    return false
  }
  }
}