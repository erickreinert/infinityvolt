from domain.entities.veichle import Vehicles
from usecases.ports.vehiclesRepository import VehiclesRepository

class DeleteVehicle: 
    def __init__(self, repository: VehiclesRepository):
        self.repository = repository
    
    def execute(self, id: str) -> Vehicles:
        return self.repository.delete(id)