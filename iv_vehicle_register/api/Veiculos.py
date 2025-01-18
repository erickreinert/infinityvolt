from datetime import datetime
from flask import jsonify, make_response, abort
from uuid import uuid4 as uuid
from domain.enums.status import Status
from domain.entities.veichle import Vehicles
from usecases.vehiclesRegister import VehiclesRegister
from usecases.findById import FindById
from usecases.updateVehicle import UpdateVehicle
from usecases.deleteVehicle import DeleteVehicle
from usecases.adapters.vehicleRepository import VehicleRepository
from usecases.adapters.inMemoryRepository import InMemoryVehiclesRepository
from models.db import db

repo = VehicleRepository(db.session)

def create(vehicle: dict):
    # Verificar se todos os campos necessários estão presentes
    brand = vehicle.get("brand_name")
    model = vehicle.get("model_name")
    year = vehicle.get("model_year")
    autonomy = vehicle.get("autonomy")
    correlation_id = vehicle.get("correlation_id")
    if not all([brand, model, year, autonomy]):
        abort(400, description="Faltando campos obrigatórios: 'brand', 'model', 'year' ou 'autonomy'")

    id = str(uuid())

    new_vehicle = Vehicles(id, brand, model, year, autonomy, Status.BLOCKED.value, correlation_id)

    register_use_case = VehiclesRegister(new_vehicle, repo)
    register_use_case.execute(new_vehicle)

    response = make_response({
        'status': 201,
        'message': 'Veículo criado com sucesso',
        'vehicle': new_vehicle.to_dict()
    }, 201)

    return response

def find_by_id(id: str):
    # Busca o veículo pelo ID
    vehicle = FindById(repo).execute(id)
    if vehicle is not None:
        return make_response(vehicle.to_dict(), 200)
    else:
        return make_response(
            {"error": "Veículo não encontrado", "status": 404},
            404
        )
    
def update(id, vehicle: Vehicles):
    UpdateVehicle(repo).execute(id, vehicle)
    findByIdUseCase = FindById(repo).execute(id)
    if findByIdUseCase != None:
        return make_response(
            {
                'status': 200,
                'user': findByIdUseCase.to_dict()
            }
    )

def delete(id):
    DeleteVehicle(repo).execute(id)
    return make_response(
            {
                'status': 200,
            },
            200
    )
