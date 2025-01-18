from domain.entities.veichle import Vehicles
from usecases.ports.vehiclesRepository import VehiclesRepository
from typing import List
class FindByOwner: 
    def __init__(self, repository: VehiclesRepository):
        self.repository = repository
    
    def execute(self, id: str) -> List[Vehicles]:
        return self.repository.find_by_owner(id)