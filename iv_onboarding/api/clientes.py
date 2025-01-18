from flask import jsonify, make_response, abort
from shortuuid import uuid

from uuid import uuid4 as uuid
from flask import abort

from domain.enums.status import Status
from domain.entities.users import Users
from domain.validators.email import Email
from domain.validators.validator import Validator
from usecases.userOnboarding import UserOnboarding
from usecases.getAllUser import GetUsers
from usecases.findByEmail import FindByEmail
from usecases.findById import FindById
from usecases.updateUser import UpdateUser
from usecases.deleteUser import DeleteUser
from usecases.adapters.inMemoryRepository import InMemoryUserRepository
from usecases.adapters.userRepository import UserRepository
from models.db import db
import json

repo = InMemoryUserRepository()
dbRepo = UserRepository(db.session)

def find_all():
    users = GetUsers(dbRepo).execute()
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
    Email.validate(email.get("email", None))
    user = FindByEmail(dbRepo).execute(email.get("email", None))
    if user != None:
        return make_response(user.to_dict())
    else:
        return make_response(
            {
                400,
                "Usuário nao encontrado"
            },
            400
        )

def read_one(id: str):
    user = FindById(dbRepo).execute(id)
    if user != None:
        return make_response(user.to_dict())
    else:
        return make_response(
            {
                400,
                "Usuário nao encontrado"
            },
            400
        )

def create(user: Users):
 try:
    errors = Validator.validate(user)
    print(errors)
    if errors != []:
        return make_response(
            {
                'status': 400,
                'errors': errors
            },
            400
        )
    
    name = user.get("name", None)
    lastName = user.get("lastname", None)
    birthdate = user.get("birthdate", None)
    phone = user.get("phone", None)
    email = user.get("email", None)
    correlation_id = user.get("correlation_id", None)
    id=str(uuid())

    newUser = Users(id, name, lastName, birthdate, phone, email, Status.CREATED.value, correlation_id)
    registerUseCase = UserOnboarding(newUser, dbRepo)
    existingUser = FindByEmail(dbRepo).execute(email)

    if existingUser != None:
        return make_response(
            {
                400,
                "Este email já esta em uso"
            },
            400
        )

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

 except ValueError as e:
        return abort(400, str(e))



def update(id, user: Users):
    existingUser = FindByEmail(dbRepo).execute(user.get("email", None))
    if existingUser != None:
        return make_response(
            {
                400,
                "Este email já esta em uso"
            },
            400
        )
    
    UpdateUser(dbRepo).execute(id, user)
    findByIdUseCase = FindById(dbRepo).execute(id)
    if findByIdUseCase != None:
        return make_response(
            {
                'status': 200,
                'user': findByIdUseCase.to_dict()
            }
    )

def delete(id):
    DeleteUser(dbRepo).execute(id)
    return make_response(
            {
                'status': 200,
            },
            200
    )
