from datetime import datetime
from flask import jsonify, make_response, abort
from shortuuid import uuid
from domain.enums.status import Status
from domain.entities.veichle import Vehicles
from usecases.vehiclesRegister import VehiclesRegister
from usecases.adapters.vehicleRepository import VehicleRepository
from usecases.adapters.inMemoryRepository import InMemoryVehiclesRepository
from models.db import db

repo = VehicleRepository(db.session)

def create(vehicle: dict):
    # Verificar se todos os campos necessários estão presentes
    brand = vehicle.get("brand")
    model = vehicle.get("model")
    year = vehicle.get("year")
    autonomy = vehicle.get("autonomy")
    
    if not all([brand, model, year, autonomy]):
        abort(400, description="Faltando campos obrigatórios: 'brand', 'model', 'year' ou 'autonomy'")

    # Gerar ID único para o veículo
    id = str(uuid())

    # Criar o veículo
    new_vehicle = Vehicles(id, brand, model, year, autonomy, Status.CREATED.value)

    # Criar o caso de uso e registrar o veículo
    register_use_case = VehiclesRegister(new_vehicle, repo)
    register_use_case.execute(new_vehicle)

    # Retornar resposta com o status 201 e o veículo criado
    response = make_response({
        'status': 201,
        'message': 'Veículo criado com sucesso',
        'vehicle': new_vehicle.to_dict()
    }, 201)

    return response