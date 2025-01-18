export default interface IFormularioRegistro {
    email: string,
    nome: string,
    sobrenome: string,
    telefone: string,
    dataNascimento: string | null
    senha: string
    repetirSenha: string
    marca: string
    modelo: string
    ano: string | number
    autonomia: string | number
}