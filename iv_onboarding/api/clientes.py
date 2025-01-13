from datetime import datetime
from flask import jsonify, make_response, abort
from shortuuid import uuid


from domain.enums.status import Status
from domain.entities.user import User
from usecases.userOnboarding import UserOnboarding
from usecases.getAllUser import GetUsers
from usecases.findByEmail import FindByEmail
from usecases.findById import FindById
from usecases.updateUser import UpdateUser
from usecases.adapters.inMemoryRepository import InMemoryUserRepository

import json
def get_timestamp():
    return datetime.now().strftime(("%Y-%m-%d %H:%M:%S"))


id1, id2, id3, id4, id5 = str(uuid()), str(uuid()), str(uuid()), str(uuid()), str(uuid())

PEOPLE = {
    id1: {
        "id": id1,
        "Nome": "ABDELHADI",
        "Sobrenome": "AMRAOUI",
        "Data_nasc": "10-01-1990",
        "Telefone": "11987657898",
        "Email" :"frb@gmail.com",
        "timestamp": get_timestamp(),
    },
    id2: {
        "id": id2,
        "Nome": "ABDON OLIVEIRA SILVA",
        "Sobrenome": "OLIVEIRA SILVA",
        "Data_nasc": "10-01-1990",
        "Telefone": "11987657898",
        "Email" :"frb@gmail.com",
        "timestamp": get_timestamp(),
    },
    id3: {
        "id": id3,
        "Nome": "ABEGAIL VALEJO",
        "Sobrenome": "VALEJO",
        "Data_nasc": "10-01-1990",
        "Telefone": "11987657898",
        "Email" :"frb@gmail.com",
        "timestamp": get_timestamp(),
    },
    id4: {
        "id": id4,
        "Nome": "ABIZAEL",
        "Sobrenome": "CAMPOS JUNIOR",
         "Data_nasc": "10-01-1990",
        "Telefone": "11987657898",
        "Email" :"frb@gmail.com",
        "timestamp": get_timestamp(),
    },
    id5: {
        "id": id5,
        "Nome": "ABRAAO",
        "Sobrenome": "DA CRUZ PEREIRA",
        "Data_nasc": "10-01-1990",
        "Telefone": "11987657898",
        "Email" :"frb@gmail.com",
        "timestamp": get_timestamp(),
    },
}

repo = InMemoryUserRepository()

def find_all():
    users = GetUsers(repo).execute()
    dict_clientes = [user.to_dict() for user in users]
    clientes = jsonify(dict_clientes)
    qtd = len(dict_clientes)
    content_range = "clientes 0-"+str(qtd)+"/"+str(qtd)
    # Configura headers
    clientes.headers['Access-Control-Allow-Origin'] = '*'
    clientes.headers['Access-Control-Expose-Headers'] = 'Content-Range'
    clientes.headers['Content-Range'] = content_range
    return make_response(clientes)

def find_by_email(email:str):
    user = FindByEmail(repo).execute(email.get("email", None))
    if user != None:
        return make_response(user.to_dict())
    else:
        return abort(
            404, "Usuário não encontrado"
        )

def read_one(user_id: str):
    user = FindById(repo).execute(user_id)
    if user != None:
        return make_response(user.to_dict())
    else:
        return abort(
            404, "Usuário não encontrado"
        )

def create(user: User):
    name = user.get("name", None)
    lastName = user.get("lastname", None)
    birthdate = user.get("birthdate", None)
    phone = user.get("phone", None)
    email = user.get("email", None)
    user_id=str(uuid())
    newUser = User(user_id, name, lastName, birthdate, phone, email, Status.CREATED.value)
    registerUseCase = UserOnboarding(newUser, repo)
    existingUser = FindByEmail(repo).execute(email)

    if existingUser != None:
        response = make_response(
            json.dumps({
                'status': 400,
                'message': "Usuário já existe"
            }),
            400
        )
        return response

    registerUseCase.execute(newUser)
    response = make_response(
        json.dumps({
            'status': 201,
            'user': newUser.to_dict()
        }),
        201
    )
    response.content_type = 'application/json'
    return response

def update(user_id, user: User):
    userIndex = repo.find_index_by_id(user_id)
    if(userIndex == -1):
        return abort(404, "Usuário não encontrado")
    UpdateUser(repo).execute(userIndex, user)
    findByIdUseCase = FindById(repo).execute(user_id)
    if findByIdUseCase != None:
        return make_response(
            {
                'status': 200,
                'user': findByIdUseCase.to_dict()
            }
    )

def delete(user_id):
    if user_id in PEOPLE:
        del PEOPLE[user_id]
        return make_response(
            "{id} deletado com sucesso".format(id=user_id), 200
        )
    else:
        abort(
            404, "Pessoa com sobrenome {Sobrenome} nao encontrada".format(id=user_id)
        )