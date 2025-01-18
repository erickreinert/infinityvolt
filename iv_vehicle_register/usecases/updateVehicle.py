from domain.entities.veichle import Vehicles
from usecases.ports.vehiclesRepository import VehiclesRepository

class UpdateVehicle: 
    def __init__(self, repository: VehiclesRepository):
        self.repository = repository
    
    def execute(self, id: str, vehicle: Vehicles) -> Vehicles:
        return self.repository.update(id, vehicle)