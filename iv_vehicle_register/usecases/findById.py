from domain.entities.veichle import Vehicles
from usecases.ports.vehiclesRepository import VehiclesRepository

class FindById: 
    def __init__(self, repository: VehiclesRepository):
        self.repository = repository
    
    def execute(self, id: str) -> Vehicles:
        return self.repository.find_by_id(id)