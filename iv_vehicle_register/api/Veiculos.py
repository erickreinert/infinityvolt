from datetime import datetime
from flask import jsonify, make_response, abort
from shortuuid import uuid
from domain.enums.status import Status
from domain.entities.user import User
from usecases.userOnboarding import UserOnboarding
from usecases.getAllUser import GetUsers
from usecases.adapters.inMemoryRepository import InMemoryUserRepository

def get_timestamp():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# Criação de IDs únicos
id1, id2, id3, id4, id5 = str(uuid()), str(uuid()), str(uuid()), str(uuid()), str(uuid())

# Base de dados simulada
PEOPLE = {
    id1: {
        "id": id1,
        "Marca": "BYD",
        "Modelo": "BYD Dolphin",
        "Ano": "10-01-2024",
        "Autonomia": "300",
        "timestamp": get_timestamp(),
    },
    id2: {
        "id": id2,
        "Marca": "Volvo",
        "Modelo": "Volvo XC40",
        "Ano": "10-01-2024",
        "Autonomia": "300",
        "timestamp": get_timestamp(),
    },
    id3: {
        "id": id3,
        "Marca": "JAC",
        "Modelo": "JAC E-JS1",
        "Ano": "10-01-2024",
        "Autonomia": "500",
        "timestamp": get_timestamp(),
    },
    id4: {
        "id": id4,
        "Marca": "GWM",
        "Modelo": "Haval H6 Hev",
        "Ano": "10-01-2024",
        "Autonomia": "700",
        "timestamp": get_timestamp(),
    },
    id5: {
        "id": id5,
        "Marca": "BMW",
        "Modelo": "BMW iX",
        "Ano": "10-01-2024",
        "Autonomia": "300",
        "timestamp": get_timestamp(),
    },
}

repo = InMemoryUserRepository()

# Função para buscar todos os usuários
def find_all():
    users = GetUsers(repo).execute()
    dict_clientes = [user.to_dict() for user in users]
    clientes = jsonify(dict_clientes)
    qtd = len(dict_clientes)
    content_range = f"clientes 0-{qtd}/{qtd}"
    
    # Configura headers
    clientes.headers['Access-Control-Allow-Origin'] = '*'
    clientes.headers['Access-Control-Expose-Headers'] = 'Content-Range'
    clientes.headers['Content-Range'] = content_range
    
    return make_response(clientes)

# Função para criar um novo usuário
def create(person: dict):
    Marca = person.get("Marca", None)
    Modelo = person.get("Modelo", None)
    Ano = person.get("Ano", None)
    Autonomia = person.get("Autonomia", None)
    
    user_id = str(uuid())
    newUser = User(user_id, Marca, Modelo, Ano, Autonomia, Status.CREATED.value)
    registerUseCase = UserOnboarding(newUser, repo)
    registerUseCase.execute(newUser)
    
    return make_response({
        'status': 201,
        'user': newUser.to_dict()
    })

# Função para buscar um usuário por ID
def read_one(user_id):
    users = {user.id: user for user in GetUsers(repo).execute()}
    if user_id in users:
        person = users[user_id].to_dict()
        return make_response(person)
    else:
        abort(404, f"Pessoa com ID {user_id} não encontrada")



# Função para atualizar um usuário existente
def update(user_id, person):
    users = {user.id: user for user in repo.find_all()}
    if user_id in users:
        user = users[user_id]
        # Atualiza os atributos do usuário
        user.Marca = person.get('Marca', user.Marca)
        user.Modelo = person.get('Modelo', user.Modelo)
        user.Ano = person.get('Ano', user.Ano)
        user.Autonomia = person.get('Autonomia', user.Autonomia)
        # Atualiza o usuário no repositório
        if repo.update(user.id, user):
            return make_response(user.to_dict())
        else:
            abort(500, f'Erro ao atualizar o usuário com ID {user_id}')
    else:
        abort(404, f'Usuário com ID {user_id} não encontrado')



# Função para deletar um usuário
def delete(user_id):
    users = {user.id: user for user in repo.find_all()}
    if user_id in users:
        # Remove o usuário do repositório
        if repo.delete(user_id):
            return make_response(f'Usuário com ID {user_id} deletado com sucesso', 200)
        else:
            abort(500, f'Erro ao deletar o usuário com ID {user_id}')
    else:
        abort(404, f'Usuário com ID {user_id} não encontrado')


