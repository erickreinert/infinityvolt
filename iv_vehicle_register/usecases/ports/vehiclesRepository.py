from abc import ABC, abstractmethod
from typing import List
from domain.entities.veichle import Vehicles

class VehiclesRepository(ABC):
    @abstractmethod
    def create(self, vehicles: Vehicles):
        raise (NotImplementedError)

    @abstractmethod
    def update(self, veichles_id, veichles: Vehicles):
        raise NotImplementedError
    
    @abstractmethod
    def find_by_id(self, id) -> Vehicles:
        raise (NotImplementedError)
    
    @abstractmethod
    def delete(self, veichles_id):
        raise NotImplementedError
    
    @abstractmethod
    def find_by_owner(self, owner_id) -> List[Vehicles]:
        raise NotImplementedError