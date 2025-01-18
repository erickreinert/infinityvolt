from typing import List
from domain.entities.veichle import Vehicles
from usecases.ports.vehiclesRepository import VehiclesRepository

class GetVeichles: 
    def __init__(self, repository: VehiclesRepository):
        self.repository = repository
    
    def execute(self) -> List[Vehicles]: 
        return self.repository.find_all()
