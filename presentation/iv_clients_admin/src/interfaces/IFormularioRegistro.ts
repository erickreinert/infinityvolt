export default interface IFormularioRegistro {
    email: string,
    nome: string,
    sobrenome: string,
    dataNascimento: string | null
    senha: string
    repetirSenha: string
    marca: string
    modelo: string
    capacidade: number
    autonomia: number
}