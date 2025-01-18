from domain.entities.veichle import Vehicles
from usecases.ports.vehiclesRepository import VehiclesRepository

class VehiclesRegister: 
    def __init__(self, vehicles: Vehicles, repository: VehiclesRepository):
        self.vehicles = vehicles
        self.repository = repository
    
    def execute(self, vehicles: Vehicles):
        self.repository.create(vehicles)