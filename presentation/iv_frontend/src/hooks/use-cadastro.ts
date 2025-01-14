import IFormularioRegistro from "@/interfaces/IFormularioRegistro"
import axios from "axios"
import { useState } from "react"

export default function useCadastro() {
    const [isLoading, setIsLoading] = useState(false)

    async function sendData(formData: IFormularioRegistro) {
        setIsLoading(true)
        try {
         const res = await axios.post("http://localhost:3001/api/cadastro", formData)
         alert(JSON.stringify(res.data))
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

  return {isLoading, sendData}
}
